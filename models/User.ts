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
  email: { 
    type: String, 
    required: true, 
    unique: true, 
    match: [/^\S+@\S+\.\S+$/, "Invalid email format"], 
  },
  grade: { type: String, required: true, enum: ["3rd", "4th", "5th"] },
  scores: [
    {
      activityName: { type: String, required: true },
      score: { type: Number, required: true },
    },
  ],
});

const User = models.User || model<UserDocument>("User", UserSchema);
export default User;
