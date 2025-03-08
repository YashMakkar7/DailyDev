import { model, Schema } from "mongoose";

const UserSchema = new Schema({
  username: { type: String, unique: true },
  password: String,
  email: { type: String, unique: true },
});

export const userModel = model("UserDetails", UserSchema);
