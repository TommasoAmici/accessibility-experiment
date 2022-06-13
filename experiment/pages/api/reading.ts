import Database from "better-sqlite3";
import type { NextApiRequest, NextApiResponse } from "next";
import { userIDFromRequest } from "../../lib/randomAssignment";

const db = new Database("experiment.sqlite3");

const readingTimeReceiver = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { startedReadingAt, finishedReadingAt } = JSON.parse(req.body);
    const userID = userIDFromRequest(req.headers["x-real-ip"] as string, req.headers["user-agent"]);
    try {
      const statement = db.prepare(
        `INSERT INTO taskReadingTime
          (timestamp, userID, startedReadingAt, finishedReadingAt)
        VALUES
          (CURRENT_TIMESTAMP, ?, ?, ?)`,
      );
      statement.run(userID, startedReadingAt, finishedReadingAt);
      res.status(200).json({ message: "OK" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Failed to store results" });
    }
  } else {
    res.status(405).json({ message: "Only POST is supported by this endpoint" });
  }
};

export default readingTimeReceiver;
