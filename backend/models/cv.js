import { Schema, model } from "mongoose";

const cvSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    cvImage: {
      public_id: {
        type: String,
      },
      url: {
        type: String,
      },
    },
    userName: {
      type: String,
    },
    cvFor: {
      type: String,
    },
    cvUrl:{
      type:String
    }
  },
  {
    timestamps: true,
  }
);

export const CV = model("CV", cvSchema);
