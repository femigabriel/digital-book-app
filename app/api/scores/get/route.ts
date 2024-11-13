// pages/api/scores/get.ts
import dbConnect from "@/lib/dbConnect";
import Score from "@/models/Score";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { userId } = req.query;  // Get userId from the query string

    try {
      await dbConnect(); // Ensure connection to the database

      // Fetch scores for the user
      const scores = await Score.find({ userId }).sort({ createdAt: -1 });  // Sort by the most recent score
      res.status(200).json(scores);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch scores" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
