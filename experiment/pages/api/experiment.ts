import Database, { SqliteError } from "better-sqlite3";
import type { NextApiRequest, NextApiResponse } from "next";
import { userIDFromRequest } from "../../lib/randomAssignment";

const db = new Database("experiment.sqlite3");

const postSurvey = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const userAgent = req.headers["user-agent"];
    const { experimentGroup, taskStartedAt, taskFinishedAt, taskAbandoned, askedForHelp } =
      JSON.parse(req.body);
    const userID = userIDFromRequest(req.headers["x-real-ip"] as string, req.headers["user-agent"]);
    try {
      const statement = db.prepare(
        `INSERT INTO results
          (timestamp, userID, userAgent, experimentGroup, taskStartedAt, taskFinishedAt, taskAbandoned, askedForHelp)
        VALUES
          (CURRENT_TIMESTAMP, ?, ?, ?, ?, ?, ?, ?)`,
      );
      statement.run(
        userID,
        userAgent,
        experimentGroup,
        taskStartedAt,
        taskFinishedAt,
        String(taskAbandoned),
        askedForHelp,
      );
      res.status(200).json({ message: "Response successfully saved, thank you!" });
    } catch (err) {
      console.error(err);
      if (err instanceof SqliteError && err.code === "SQLITE_CONSTRAINT_UNIQUE") {
        res
          .status(400)
          .json({ message: "It looks like you have already participated in the experiment" });
      } else {
        res.status(500).json({ message: "Failed to save response, please try again" });
      }
    }
  } else {
    res.status(405).json({ message: "Only POST is supported by this endpoint" });
  }
};

export default postSurvey;
