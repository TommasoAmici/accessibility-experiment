CREATE TABLE IF NOT EXISTS results(
  id                      INTEGER PRIMARY KEY,
  userID                  INTEGER NOT NULL UNIQUE,
  experimentGroup         TEXT CHECK( experimentGroup IN ('accessible','inaccessible') ) NOT NULL,
  askedForHelp            INTEGER NOT NULL,
  taskStartedAt           TEXT NOT NULL,
  taskFinishedAt          TEXT NOT NULL,
  taskAbandoned           BOOLEAN NOT NULL,
  -- survey drops the NOT NULL constraint as I predict some people may not complete the survey
  age                     INTEGER,
  disability              BOOLEAN,
  accessibilityOptions    BOOLEAN,
  assistiveTechnology     BOOLEAN,
  taskDifficulty          TEXT,
  onlineShoppingFrequency TEXT
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
