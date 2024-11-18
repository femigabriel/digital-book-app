import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";
import mongoose from "mongoose";

export async function POST(req: Request) {
  try {
    // Parse the request body
    const { userId, score, activityName } = await req.json();
    console.log("Payload received:", { userId, score, activityName });

    // Validate userId
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      console.error("Invalid userId:", userId);
      return NextResponse.json({ message: "Invalid userId" }, { status: 400 });
    }

    // Connect to the database
    await dbConnect();
    console.log("Database connected successfully.");

    // Update the user's scores without overwriting required fields
    const user = await User.findByIdAndUpdate(
      userId,
      { $push: { scores: { activityName, score } } },
      { new: true, runValidators: true } // Ensures data integrity
    );

    if (!user) {
      console.error("User not found with ID:", userId);
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    console.log("Updated user:", user);

    return NextResponse.json({ message: "Score saved successfully" }, { status: 200 });
  } catch (error: unknown) {
    // Log the error to the console
    if (error instanceof Error) {
      console.error("Error in POST handler:", {
        message: error.message,
        stack: error.stack,
      });
    } else {
      console.error("An unknown error occurred.");
    }

    // Send the error response
    return NextResponse.json(
      { message: "Internal Server Error", error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}
