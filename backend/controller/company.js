import { Candidate } from "../models/company/Candidate.js";
import { CompantState } from "../models/company/State.js";
import AppError from "../util/error.js";
import { catchAsyncError } from "../util/util.js";

const getStates = catchAsyncError(async (req, res, next) => {
  const sixMonthsAgo = new Date();
  const now = new Date();

  sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

  const companyId = req.company._id;

  const state = await CompantState.findOne({
    company: companyId,
  });

  if (!state) {
    return next(
      new AppError("Something went wrong while fetching data! Please try again")
    );
  }

  const applicants = await Candidate.aggregate([
    {
      $match: {
        appliedAt: {
          $gte: sixMonthsAgo,
        },
      },
    },
    {
      $group: {
        _id: {
          $month: "$appliedAt",
        },
        count: {
          $sum: 1,
        },
      },
    },
    {
      $project: {
        _id: 0,
        month: "$_id",
        count: 1,
      },
    },
    { $sort: { month: 1 } },
  ]);

  const lastSixMonthsData = [];

  for (let i = 6; i > 0; i--) {
    const date = new Date();
    date.setMonth(now.getMonth() - i);
    lastSixMonthsData.push({ month: date.getMonth() + 1, count: 0 });
  }

  const finalData = lastSixMonthsData.map((mth) => {
    const data = applicants.find((state) => state.month === mth.month);

    return data ? data : mth;
  });

  res.status(200).json({
    success: true,
    state,
    applicants: finalData,
  });
});

export { getStates };
