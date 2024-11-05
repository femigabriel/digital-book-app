import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect"; // Ensure you import your dbConnect function
import User from "@/models/User"; // Adjust the path to your User model

export async function POST(req: NextRequest) {
  const { name } = await req.json();
  
  await dbConnect(); // Ensure the DB is connected

  try {
    const user = await User.findOne({ name });

    if (!user) {
      return NextResponse.json(
        { message: "Nickname not found", success: false },
        { status: 401 }
      );
    }

    return NextResponse.json(
      { message: "Welcome to Student Zone!!! ", success: true, userId: user._id }, // Include user ID if needed
      { status: 200 }
    );
  } catch (error) {
    console.error("Error during login:", error);
    return NextResponse.json(
      { message: "Server error", success: false },
      { status: 500 }
    );
  }
}
