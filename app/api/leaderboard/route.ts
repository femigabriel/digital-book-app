import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect"; // Adjust the path as needed
import User from "@/models/User"; // Adjust path as needed

export async function GET() {
  await dbConnect();

  try {
    // Fetch all users and include the grade field
    const users = await User.find()
      .select("name avatar scores grade") // Include the 'grade' field
      .sort({ "scores.total": -1 })       // Adjust the sorting logic if needed
      .limit(10);                         // Limit to top 10 users

    // If no users are found, return an empty array
    if (!users.length) {
      return NextResponse.json({ error: "No users found" }, { status: 404 });
    }

    // Return the users' leaderboard data
    return NextResponse.json({ users });
  } catch (error) {
    console.error("Error fetching users:", error); // Log the error for debugging
    return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 });
  }
}
