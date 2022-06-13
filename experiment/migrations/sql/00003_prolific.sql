CREATE TABLE IF NOT EXISTS prolific(
  id                      INTEGER PRIMARY KEY,
  userID                  INTEGER NOT NULL UNIQUE,
  prolificPID             TEXT NOT NULL,
  studyID                 TEXT NOT NULL,
  sessionID               TEXT NOT NULL,
  timestamp               TEXT
);
