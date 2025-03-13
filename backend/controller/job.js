import { uploadToCloudinary } from "../config/cloudinary.js";
import { Job } from "../models/Job.js";
import { catchAsyncError } from "../util/util.js";

const createJob = catchAsyncError(async (req, res, next) => {
  const userId = req.company._id;

  const data = { ...req.body };

  if (req.file) {
    const result = await uploadToCloudinary(req.file);

    data.banner = {
      public_id: result.public_id,
      url: result.secure_url,
    };
  }

  data.slug = data.title.replace(/\s+/, "-").toLowerCase();
  data.employer = userId;

  const job = await Job.create(data);

  res.status(201).json({
    success: true,
    job,
    message: "Job posted successfully",
  });
});

export { createJob };
