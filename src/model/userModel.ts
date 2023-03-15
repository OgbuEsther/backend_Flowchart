import { Schema, model, Document } from "mongoose";
import { Iuser } from "../interfaces/userInterface";
import isEmail from "validator/lib/isEmail";
import bcrypt from "bcrypt";

const userSchema: Schema<Iuser> = new Schema(
  {
    name: {
      type: String,
      required: [true, "please enter your name"],
    },
    email: {
      type: String,
      required: [true, "please enter your email"],
      validate: [isEmail, "Please enter a valid email address."],
      lowercase: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "please enter your password"],
    },
    confirmpassword: {
      type: String,
      required: [true, "please enter your password"],
    },
    role: {
      enum: ["user", "admin", "manager"],
      message: "you must either be a user, an amin or a manager.",
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  let user = this;
  if (!this.isModified("password")) next();

  const salt = await bcrypt.genSalt(12);
  user.password = await bcrypt.hash(user.password, salt);
  user.confirmpassword = user.password;
  next();
});
const userModel = model<Iuser>("userCollection", userSchema);

export default userModel;
