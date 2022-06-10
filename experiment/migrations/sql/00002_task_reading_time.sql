CREATE TABLE IF NOT EXISTS taskReadingTime(
  id                      INTEGER PRIMARY KEY,
  userID                  INTEGER NOT NULL,
  startedReadingAt        TEXT NOT NULL,
  finishedReadingAt       TEXT NOT NULL,
  timestamp               TEXT
);
