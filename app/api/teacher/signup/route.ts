// app/api/teacher/signup/route.ts
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import dbConnect from "@/lib/dbConnect";
import Teacher from "@/models/Teacher";

// Password validation function
function validatePassword(password: string): boolean {
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
}

export async function POST(request: Request) {
  try {
    // Connect to the database
    await dbConnect();

    // Parse the request body
    const { firstName, lastName, email, password, confirmPassword } = await request.json();

    // Validate inputs
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    if (password !== confirmPassword) {
      return NextResponse.json({ error: "Passwords do not match" }, { status: 400 });
    }

    if (!validatePassword(password)) {
      return NextResponse.json(
        {
          error:
            "Password must be at least 8 characters long and contain at least one letter and one number.",
        },
        { status: 400 }
      );
    }

    // Check for existing teacher
    const existingTeacher = await Teacher.findOne({ email });
    if (existingTeacher) {
      return NextResponse.json({ error: "Email is already in use" }, { status: 400 });
    }

    // Create and save the new teacher
    const teacher = new Teacher({
      firstName,
      lastName,
      email,
      password, // Will be hashed by the pre-save middleware
    });

    await teacher.save();

    return NextResponse.json({ message: "Teacher registered successfully!" }, { status: 201 });
  } catch (error) {
    console.error("Error registering teacher:", error);
    return NextResponse.json({ error: "Failed to register teacher" }, { status: 500 });
  }
}
