import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";

export async function POST(request: Request) {
  try {
    await dbConnect();

    // Extract name from the request body
    const { name } = await request.json();

    if (!name) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }

    // Find the user with the provided name
    const user = await User.findOne({ name });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Return a success response with user ID and message
    return NextResponse.json(
      { success: true, message: "Welcome to the student dashboard", userId: user._id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Login Error:", error);
    return NextResponse.json({ error: "Failed to login" }, { status: 500 });
  }
}
