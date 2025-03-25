import { Resume } from "../models/resume.js";
import { User } from "../models/user.js";
import { initializeAi } from "../util/genAi.js";
import { catchAsyncError } from "../util/util.js";

const createResume = catchAsyncError(async (req, res, next) => {
  const userId = req.user._id;

  const resumeData = req.body;

  const existingResumeForUser = await Resume.findOne({ user: userId });

  if (existingResumeForUser) {
    return next(new AppError("Your resume already exists", 406));
  }

  let prompt = `
            Create a professional resume based on the following information:

            Headline: ${resumeData.headline || ""}

            Skills: ${resumeData.skills ? resumeData.skills.join(", ") : ""}

            Experiences:
            ${
              resumeData.experiences
                ? resumeData.experiences
                    .map(
                      (exp) =>
                        `- ${exp.workingPosition}, ${exp.companyName}, ${exp.startDate} - ${exp.endDate}`
                    )
                    .join("\n")
                : ""
            }

            Education:
            ${
              resumeData.education
                ? resumeData.education
                    .map(
                      (edu) =>
                        `- ${edu.degree}, ${edu.university}, ${edu.startDate} - ${edu.endDate}`
                    )
                    .join("\n")
                : ""
            }
        `;

  if (resumeData.projects && resumeData.projects.length > 0) {
    prompt += `\nProjects:\n${resumeData.projects
      .map(
        (proj) =>
          `- ${proj.name}, ${
            proj.projectLink
          }, Technologies: ${proj.technologies.join(", ")}`
      )
      .join("\n")}`;
  }

  prompt += `\n\nGenerate the resume and provide feedback and suggestions for improvement in JSON format. The JSON should have the following structure:\n\n{\n  "resume": "The generated resume text.",\n  "feedback": {\n    "title": "Feedback and Suggestions for Improvement",\n    "contactInformation": "Suggestions for contact information improvements.",\n    "summary": "Suggestions for summary improvements.",\n    "skills": "Suggestions for skills improvements.",\n    "experience": "Suggestions for experience improvements.",\n    "projects": "Suggestions for projects improvements.",\n    "education": "Suggestions for education improvements.",\n    "overallPresentation": "Suggestions for overall presentation improvements."\n  }\n}\n\nEnsure the response is valid JSON and contains only the JSON object.`;

  const model = await initializeAi();

  const result = await model.generateContent(prompt);

  const response = await result.response;
  const text = response
    .text()
    .replace(/```json\n/g, "")
    .replace(/```/g, "");
  const responseObject = JSON.parse(text);

  const aiFeedback = JSON.stringify(responseObject.feedback);
  const aiResume = responseObject.resume;

  const resume = await Resume.create({
    user: userId,
    aiFeedback,
    aiResume,
    ...resumeData,
  });

  await User.findByIdAndUpdate(
    userId,
    {
      resume: resume._id,
    },
    {
      new: true,
    }
  );

  res.status(201).json({
    success: true,
    resume,
    message:'Resume generated successfully'
  });
});

const updateResume = catchAsyncError(async (req, res, next) => {
  const userId = req.user._id;

  const data = req.body;

  const updateQuery = {};

  for (const field in data) {
    const value = data[field];

    if (Array.isArray(value)) {
      updateQuery.$addToSet = updateQuery.$addToSet || {};
      updateQuery.$addToSet[field] = {
        $each: value,
      };
      continue;
    }

    if (
      typeof value === "string" ||
      (typeof value === "object" && value !== null)
    ) {
      updateQuery.$set = updateQuery.$set || {};
      updateQuery.$set[field] = value;
    }
  }

  const resume = await Resume.findOneAndUpdate(
    {
      user: userId,
    },
    updateQuery,
    {
      new: true,
    }
  );

  res.status(200).json({
    success: true,
    resume,
  });
});

const getUserResume = catchAsyncError(async (req, res) => {
  const userId = req.user._id;

  const resume = await Resume.findOne({
    user: userId,
  });

  res.status(200).json({
    success: true,
    resume:resume || {},
  });
});

export { createResume, updateResume,getUserResume };
