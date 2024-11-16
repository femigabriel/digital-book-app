import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import Teacher from "@/models/Teacher";
import dbConnect from "@/lib/dbConnect"; // Make sure dbConnect is configured

export async function POST(request: Request) {
  try {
    await dbConnect(); // Ensure database is connected

    const { email, password } = await request.json();

    // Check if the required fields are provided
    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required!" },
        { status: 400 }
      );
    }

    // Check if teacher exists with the given email
    const teacher = await Teacher.findOne({ email });

    if (!teacher) {
      return NextResponse.json(
        { error: "Invalid email or password!" },
        { status: 401 }
      );
    }

    // Compare the provided password with the stored hash
    const isMatch = await bcrypt.compare(password, teacher.password);

    if (!isMatch) {
      return NextResponse.json(
        { error: "Invalid email or password!" },
        { status: 401 }
      );
    }

    // You can generate a JWT token here for session management if needed
    // const token = generateJWT(teacher._id); // Token generation logic

    return NextResponse.json(
      { message: "Login successful!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Login Error:", error);
    return NextResponse.json(
      { error: "Failed to log in. Please try again later." },
      { status: 500 }
    );
  }
}
