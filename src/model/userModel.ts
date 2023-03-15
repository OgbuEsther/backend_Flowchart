import { Schema, model, Document } from "mongoose";
import { IuserDocument } from "../interfaces/userInterface";
import isEmail from "validator/lib/isEmail";
import bcrypt from "bcrypt";

const userSchema: Schema<IuserDocument> = new Schema(
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
      type: String,
      enum: ["user", "admin", "manager"],
      message: "you must either be a user, an amin or a manager.",
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);
//Middleware for hashing password
userSchema.pre("save", async function (next) {
  let user = this;
  if (!this.isModified("password")) next();

  const salt = await bcrypt.genSalt(12);
  user.password = await bcrypt.hash(user.password, salt);
  user.confirmpassword = user.password;
  next();
});

//middleware to compare password

userSchema.methods.comparePassword = async function () {};
const userModel = model<IuserDocument>("userCollection", userSchema);

export default userModel;
