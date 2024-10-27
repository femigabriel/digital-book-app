import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect"; // Adjust the path as needed
import User from "@/models/User"; // Adjust path as needed

export async function GET(req: Request) {
  await dbConnect();

  // Retrieve the user ID from the request headers
  const userId = req.headers.get("user-id"); // Replace with actual ID retrieval, e.g., from session
  if (!userId) {
    return NextResponse.json({ error: "User ID is required" }, { status: 400 });
  }

  try {
    // Fetch the user by ID and select specific fields
    const user = await User.findById(userId).select("name avatar");
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Return the user data
    return NextResponse.json({ user });
  } catch (error) {
    console.error("Error fetching user data:", error); // Log the error for debugging
    return NextResponse.json({ error: "Failed to fetch user data" }, { status: 500 });
  }
}
