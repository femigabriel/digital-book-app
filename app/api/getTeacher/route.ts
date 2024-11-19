// pages/api/teachers.ts
import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/lib/dbConnect";
import Teacher from "@/models/Teacher";

// API route handler
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Ensure the database connection is established
  await dbConnect();

  if (req.method === "GET") {
    try {
      // Fetch all teachers from the database
      const teachers = await Teacher.find({});
      // Return the fetched data as a JSON response
      res.status(200).json(teachers);
    } catch (error) {
      // Handle errors during the database operation
      console.error("Error fetching teachers:", error);
      res.status(500).json({ error: "Failed to fetch teachers" });
    }
  } else {
    // If the request method is not GET, return a 405 Method Not Allowed
    res.status(405).json({ error: "Method not allowed" });
  }
}
