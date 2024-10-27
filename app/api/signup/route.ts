import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect"; 
import User from "@/models/User"; 

export async function POST(request: Request) {
  try {
    await dbConnect();

    const { name, email, avatarIndex } = await request.json();

    if (!name || !email || avatarIndex === null) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: "Email is already in use" }, { status: 400 });
    }

    const user = new User({
      name,
      email,
      avatar: `Avatar Option${avatarIndex + 1}.svg`,
    });

    await user.save();

    return NextResponse.json({ message: "User registered successfully!" }, { status: 201 });
  } catch (error) {
    console.error("Registration Error:", error);
    return NextResponse.json({ error: "Failed to register user" }, { status: 500 });
  }
}
