import mongoose, { Schema, model, models, Document } from "mongoose";

interface Score {
  activityName: string;
  score: number;
}

interface UserDocument extends Document {
  avatar: string;
  name: string;
  email: string;
  grade: string; 
  scores: Score[];
}

const UserSchema = new Schema<UserDocument>({
  avatar: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  grade: { type: String, required: true, enum: ["3rd", "4th", "5th"] }, // Restrict to specific grades
  scores: [
    {
      activityName: { type: String, required: true },
      score: { type: Number, required: true },
    },
  ],
});

if (models.User) {
  delete models.User; // Clear cached model
}

const User = model<UserDocument>("User", UserSchema);
export default User;
