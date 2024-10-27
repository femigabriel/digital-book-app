import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";
import User from "@/models/User"; // Adjust path to your User model

// Connect to MongoDB
const connectDB = async () => {
  if (mongoose.connections[0].readyState) return;
  await mongoose.connect(process.env.MONGODB_URI!);
};

export async function POST(req: NextRequest) {
  const { name } = await req.json();
  
  await connectDB();

  try {
    const user = await User.findOne({ name });

    if (!user) {
      return NextResponse.json(
        { message: "Nickname not found", success: false },
        { status: 401 }
      );
    }

    return NextResponse.json(
      { message: "Login successful", success: true },
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
