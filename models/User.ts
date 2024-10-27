// models/User.ts
import mongoose, { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  avatar: { type: String, required: true },  // Store avatar as filename
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});

if (models.User) {
  delete models.User; // Clear cached model
}
const User = model("User", UserSchema);
export default User;
