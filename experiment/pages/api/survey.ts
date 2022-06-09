import Database from "better-sqlite3";
import type { NextApiRequest, NextApiResponse } from "next";
import { userIDFromRequest } from "../../lib/randomAssignment";

const db = new Database("experiment.sqlite3");

const postSurvey = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const {
      taskDifficulty,
      realistic,
      enjoyability,
      safeness,
      age,
      country,
      disability,
      accessibilityOptions,
      assistiveTechnology,
      timeSpentOnline,
      abandonedWebsite,
    } = JSON.parse(req.body);
    const userID = userIDFromRequest(req.socket.remoteAddress, req.headers["user-agent"]);
    try {
      const statement = db.prepare(
        `UPDATE results SET
          taskDifficulty = ?,
          realistic = ?,
          enjoyability = ?,
          safeness = ?,
          age = ?,
          country = ?,
          disability = ?,
          accessibilityOptions = ?,
          assistiveTechnology = ?,
          timeSpentOnline = ?,
          abandonedWebsite = ?
        WHERE
          userID = ?`,
      );
      statement.run(
        taskDifficulty,
        realistic,
        enjoyability,
        safeness,
        age,
        country,
        disability,
        accessibilityOptions,
        assistiveTechnology,
        timeSpentOnline,
        abandonedWebsite,
        userID,
      );
      res.status(200).json({ message: "Response successfully saved, thank you!" });
    } catch (err) {
      res.status(500).json({ message: "Failed to save response, please try again" });
    }
  } else {
    res.status(405).json({ message: "Only POST is supported by this endpoint" });
  }
};

export default postSurvey;
