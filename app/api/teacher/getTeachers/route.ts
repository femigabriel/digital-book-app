import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Teacher from "@/models/Teacher"; // Import the Teacher model

export async function GET() {
  try {
    await dbConnect(); // Ensure the database is connected

    // Fetch all teachers from the database
    const teachers = await Teacher.find({}, "-password"); // Exclude password field

    return NextResponse.json({ teachers }, { status: 200 });
  } catch (error) {
    console.error("Error fetching teachers:", error);
    return NextResponse.json(
      { error: "Failed to fetch teachers. Please try again later." },
      { status: 500 }
    );
  }
}
