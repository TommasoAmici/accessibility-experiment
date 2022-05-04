CREATE TABLE IF NOT EXISTS surveyResponses(
  id                      INTEGER PRIMARY KEY,
  userID                  INTEGER NOT NULL,
  experimentGroup         TEXT CHECK( experimentGroup IN ('accessible','inaccessible') ) NOT NULL,
  askedForHelp            INTEGER NOT NULL,
  taskStartedAt           INTEGER NOT NULL,
  taskFinishedAt          INTEGER NOT NULL,
  taskAbandoned           BOOLEAN NOT NULL,
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

CREATE TABLE IF NOT EXISTS webVitals(
  id            INTEGER PRIMARY KEY,
  userID        INTEGER NOT NULL,
  metric        TEXT CHECK( metric IN ('FCP','LCP','CLS','FID','TTFB','Next.js-hydration','Next.js-route-change-to-render','Next.js-render') ) NOT NULL,
  value         INTEGER NOT NULL
);
