import Database from "better-sqlite3";
import type { NextApiRequest, NextApiResponse } from "next";
import { userIDFromRequest } from "../../lib/randomAssignment";

const db = new Database("experiment.sqlite3");

const abandonedBeaconReceiver = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const userAgent = req.headers["user-agent"];
    const { experimentGroup, taskStartedAt, taskFinishedAt, taskAbandoned, askedForHelp } =
      JSON.parse(req.body);
    const userID = userIDFromRequest(req.socket.remoteAddress, req.headers["user-agent"]);
    try {
      const statement = db.prepare(
        `INSERT INTO abandoned
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
      res.status(200).json({ message: "OK" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Failed to store results" });
    }
  } else {
    res.status(405).json({ message: "Only POST is supported by this endpoint" });
  }
};

export default abandonedBeaconReceiver;
