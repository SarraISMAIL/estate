import { Timestamp } from "bson";
import mongoose from "mongoose";

const userScheme = new Mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { Timestamps: true }
);

const USer = mongoose.model("User", userSchema);
export default UserActivation;
