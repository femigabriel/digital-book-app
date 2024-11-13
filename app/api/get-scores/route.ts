import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";
import mongoose from "mongoose";

// Handler for the GET request
export async function GET(req: Request, { params }: { params: { userId: string } }) {
  const { userId } = params; // Get userId from the request parameters (URL)

  // Validate userId
  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return NextResponse.json({ message: "Invalid userId" }, { status: 400 });
  }

  try {
    await dbConnect();

    // Find the user by userId (ensure the user exists)
    const user = await User.findOne({ _id: userId });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    // Return the user's scores (or an empty array if none are present)
    return NextResponse.json({ scores: user.scores || [] }, { status: 200 });
  } catch (error) {
    console.error("Error fetching scores:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
