import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import dbConnect from "@/lib/dbConnect";
import Teacher from "@/models/Teacher"; // Import the Teacher model

// Secret key for JWT (should be stored in .env for security)
const JWT_SECRET = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFiY0BleGFtcGxlLmNvbSIsInVzZXJJZCI6IjY2YmUxYzkxOGMwZTk0Nzk3ZWI4NzE1YiIsImlhdCI6MTczMTk3NDc1NX0.4iIogtoQUkMFXg2Malzs-qOl5iT7CQxZDF77x9OZX74"; 

export async function GET(request: Request) {
  try {
    await dbConnect(); // Ensure database is connected

    // Extract the token from request headers (Authorization)
    const token = request.headers.get("Authorization")?.split(" ")[1]; 

    if (!token) {
      return NextResponse.json(
        { error: "No token provided!" },
        { status: 401 }
      );
    }

    // Verify the token and extract the teacher's ID
    let teacherId;
    try {
      const decoded = jwt.verify(token, JWT_SECRET) as { teacherId: string };
      teacherId = decoded.teacherId;
    } catch (err) {
      return NextResponse.json(
        { error: "Invalid or expired token!" },
        { status: 401 }
      );
    }

    // Fetch the teacher's details by ID, excluding the password
    const teacher = await Teacher.findById(teacherId).select("-password");

    if (!teacher) {
      return NextResponse.json(
        { error: "Teacher not found!" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { teacher },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching teacher details:", error);
    return NextResponse.json(
      { error: "Failed to fetch teacher details. Please try again later." },
      { status: 500 }
    );
  }
}
