import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";
import mongoose from "mongoose";

export async function POST(req: Request) {
  try {
    const { userId, score, activityName } = await req.json();
    console.log("Payload received:", { userId, score, activityName });

    // Validate userId
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      console.error("Invalid userId:", userId);
      return NextResponse.json({ message: "Invalid userId" }, { status: 400 });
    }

    await dbConnect();
    console.log("Database connected successfully.");

    // Find the user
    const user = await User.findById(userId);
    if (!user) {
      console.error("User not found with ID:", userId);
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    // Add new score
    user.scores = user.scores || [];
    user.scores.push({ activityName, score });
    console.log("Updated scores:", user.scores);

    await user.save();
    console.log("User saved successfully.");

    return NextResponse.json({ message: "Score saved successfully" }, { status: 200 });
  } catch (error: unknown) {
    // Type assertion to handle the 'unknown' type
    if (error instanceof Error) {
      console.error("Error in POST handler:", {
        message: error.message,
        stack: error.stack,
      });
    } else {
      console.error("An unknown error occurred.");
    }
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}


