// models/Teacher.ts
import mongoose, { Schema, model, models, Document } from "mongoose";
import bcrypt from "bcrypt";

interface TeacherDocument extends Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

const TeacherSchema = new Schema<TeacherDocument>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 8 },
  },
  { timestamps: true } // Automatically manages createdAt and updatedAt
);

// Pre-save hook to hash the password
TeacherSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});

// Use the existing model if already compiled, or create a new one
const Teacher = models.Teacher || model<TeacherDocument>("Teacher", TeacherSchema);

export default Teacher;
