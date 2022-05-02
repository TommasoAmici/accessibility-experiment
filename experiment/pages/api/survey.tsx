import Database from "better-sqlite3";
import type { NextApiRequest, NextApiResponse } from "next";

const db = new Database("experiment.sqlite3");

const postSurvey = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const {
      experimentGroup,
      experimentStartedAt,
      experimentFinishedAt,
      age,
      disability,
      accessibilityOptions,
      assistiveTechnology,
      taskDifficulty,
      onlineShoppingFrequency,
    } = req.body;
    try {
      const statement = db.prepare(
        "INSERT INTO surveyResponses (experimentGroup, experimentStartedAt, experimentFinishedAt, age, disability, accessibilityOptions, assistiveTechnology, taskDifficulty, onlineShoppingFrequency) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
      );
      statement.run(
        experimentGroup,
        experimentStartedAt,
        experimentFinishedAt,
        age,
        disability,
        accessibilityOptions,
        assistiveTechnology,
        taskDifficulty,
        onlineShoppingFrequency,
      );
      res.status(200).json({ message: "Response successfully saved, thank you!" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Failed to save response, please try again" });
    }
  } else {
    res.status(405).json({ message: "Only POST is supported by this endpoint" });
  }
};

export default postSurvey;
