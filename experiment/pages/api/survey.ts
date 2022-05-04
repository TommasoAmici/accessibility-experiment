import Database from "better-sqlite3";
import type { NextApiRequest, NextApiResponse } from "next";
import { userIDFromRequest } from "../../lib/randomAssignment";

const db = new Database("experiment.sqlite3");

const postSurvey = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const {
      age,
      disability,
      accessibilityOptions,
      assistiveTechnology,
      taskDifficulty,
      onlineShoppingFrequency,
    } = JSON.parse(req.body);
    const userID = userIDFromRequest(req.socket.remoteAddress, req.headers["user-agent"]);
    try {
      const statement = db.prepare(
        "UPDATE results SET age = ?, disability = ?, accessibilityOptions = ?, assistiveTechnology = ?, taskDifficulty = ?, onlineShoppingFrequency = ? WHERE userID = ?",
      );
      statement.run(
        age,
        disability,
        accessibilityOptions,
        assistiveTechnology,
        taskDifficulty,
        onlineShoppingFrequency,
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
