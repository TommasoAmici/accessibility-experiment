import Database, { SqliteError } from "better-sqlite3";
import type { NextApiRequest, NextApiResponse } from "next";

const db = new Database("experiment.sqlite3");

const postSurvey = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { email } = req.body;
    try {
      const statement = db.prepare("INSERT INTO wantFinalPaper (email) VALUES (?)");
      statement.run(email);
      res.status(200).json({ message: "Email successfully saved, thank you!" });
    } catch (err) {
      if (err instanceof SqliteError && err.code === "SQLITE_CONSTRAINT_UNIQUE") {
        res.status(400).json({ message: "This email is already set to receive the results" });
      } else {
        res.status(500).json({ message: "Failed to save email, please try again" });
      }
    }
  } else {
    res.status(405).json({ message: "Only POST is supported by this endpoint" });
  }
};

export default postSurvey;
