import mongoose, { Schema, model, models } from "mongoose";

// Define the Score schema
const ScoreSchema = new Schema(
  {
    userId: { type: String, required: true }, // Change this to String instead of ObjectId
    activityName: { type: String, required: true },
    score: { type: Number, required: true },
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

if (models.Score) {
  delete models.Score; // Clear cached model
}

const Score = model("Score", ScoreSchema);

export default Score;
