import Database from "better-sqlite3";
import type { NextApiRequest, NextApiResponse } from "next";
import { userIDFromRequest } from "../../lib/randomAssignment";

const db = new Database("experiment.sqlite3");

const recordWebVitals = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const userID = userIDFromRequest(req.socket.remoteAddress, req.headers["user-agent"]);
    const { metric, value } = JSON.parse(req.body);
    try {
      const statement = db.prepare(
        "INSERT INTO webVitals (userID, metric, value) VALUES (?, ?, ?)",
      );
      statement.run(userID, metric, value);
      res.status(200).json({ message: "OK" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Error" });
    }
  } else {
    res.status(405).json({ message: "Only POST is supported by this endpoint" });
  }
};

export default recordWebVitals;
