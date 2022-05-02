CREATE TABLE IF NOT EXISTS surveyResponses(
    id                      INTEGER PRIMARY KEY,
    experimentGroup         TEXT CHECK( experimentGroup IN ('accessible','inaccessible') ) NOT NULL,
    experimentStartedAt     INTEGER NOT NULL,
    experimentFinishedAt    INTEGER NOT NULL,
    age                     INTEGER NOT NULL,
    disability              BOOLEAN NOT NULL,
    accessibilityOptions    BOOLEAN NOT NULL,
    assistiveTechnology     BOOLEAN NOT NULL,
    taskDifficulty          TEXT NOT NULL,
    onlineShoppingFrequency TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS wantFinalPaper(
    id            INTEGER PRIMARY KEY,
    email         TEXT NOT NULL UNIQUE
);
