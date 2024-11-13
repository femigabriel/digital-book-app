import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/lib/dbConnect';
import Score from '@/models/Score';

interface ScoreRequestBody {
  userId: string;
  activityName: string;
  score: number;
}

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { userId, activityName, score }: ScoreRequestBody = req.body;
  
    console.log("Received score data:", { userId, activityName, score });
  
    // Check if required data is present
    if (!userId || !activityName || score === undefined) {
      return res.status(400).json({ error: "Missing required fields" });
    }
  
    try {
      await dbConnect(); // Ensure connection to the database
  
      // Save the score
      const newScore = new Score({ userId, activityName, score });
      await newScore.save();
  
      res.status(200).json({ message: "Score saved successfully" });
    } catch (error) {
      console.error("Error saving score:", error);
      res.status(500).json({ error: "Failed to save score" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
