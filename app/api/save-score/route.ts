import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";
import mongoose from "mongoose";

type Data = {
  message: string;
};

export async function POST(req: Request) {
  const { userId, score, activityName } = await req.json();

  // Validate userId
  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return NextResponse.json({ message: "Invalid userId" }, { status: 400 });
  }

  try {
    await dbConnect();

    // Find the user by userId (now we are sure it's a valid ObjectId)
    const user = await User.findOne({ _id: userId });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    // Save score to the user's document or create a new one
    user.scores = user.scores || [];
    user.scores.push({ activityName, score });
    await user.save();

    return NextResponse.json({ message: "Score saved successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error saving score:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
