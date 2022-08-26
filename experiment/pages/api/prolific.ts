import Database from "better-sqlite3";
import type { NextApiRequest, NextApiResponse } from "next";
import { userIDFromRequest } from "../../lib/randomAssignment";

const db = new Database("experiment.sqlite3");

const readingTimeReceiver = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { prolificPID, studyID, sessionID } = JSON.parse(req.body);
    const userID = userIDFromRequest(
      req.headers["user-agent"] as string,
      req.headers["user-agent"],
    );
    try {
      const statement = db.prepare(
        `INSERT INTO prolific
          (timestamp, userID, prolificPID, studyID, sessionID)
        VALUES
          (CURRENT_TIMESTAMP, ?, ?, ?, ?)`,
      );
      statement.run(userID, prolificPID, studyID, sessionID);
      res.status(200).json({ message: "OK" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Failed to store Prolific information" });
    }
  } else {
    res.status(405).json({ message: "Only POST is supported by this endpoint" });
  }
};

export default readingTimeReceiver;
