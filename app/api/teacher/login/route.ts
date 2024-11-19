import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import Teacher from "@/models/Teacher";
import dbConnect from "@/lib/dbConnect"; // Make sure dbConnect is configured
import jwt from "jsonwebtoken"; // Import JWT

// Secret key for JWT (should be stored in .env for security)
const JWT_SECRET = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFiY0BleGFtcGxlLmNvbSIsInVzZXJJZCI6IjY2YmUxYzkxOGMwZTk0Nzk3ZWI4NzE1YiIsImlhdCI6MTczMTk3NDc1NX0.4iIogtoQUkMFXg2Malzs-qOl5iT7CQxZDF77x9OZX74"; 

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

    // Generate JWT token
    const token = jwt.sign(
      { teacherId: teacher._id },
      JWT_SECRET,
      { expiresIn: '1h' } // Token expires in 1 hour
    );

    // Log the token to the console (for debugging purposes)
    // console.log("Generated JWT Token:", token);

    // Return the token along with a success message
    return NextResponse.json(
      { message: "Login successful!", token }, // Send token in the response
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
