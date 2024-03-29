CREATE TABLE IF NOT EXISTS results(
  id                      INTEGER PRIMARY KEY,
  userID                  INTEGER NOT NULL UNIQUE,
  userAgent               TEXT NOT NULL,
  experimentGroup         TEXT CHECK( experimentGroup IN ('accessible','inaccessible') ) NOT NULL,
  askedForHelp            INTEGER NOT NULL,
  taskStartedAt           TEXT NOT NULL,
  taskFinishedAt          TEXT NOT NULL,
  taskAbandoned           BOOLEAN NOT NULL,
  -- survey drops the NOT NULL constraint as I predict some people may not complete the survey
  taskDifficulty          INTEGER,
  realistic               INTEGER,
  enjoyability            INTEGER,
  safeness                INTEGER,
  age                     INTEGER,
  country                 TEXT,
  disability              BOOLEAN,
  accessibilityOptions    BOOLEAN,
  assistiveTechnology     BOOLEAN,
  timeSpentOnline      TEXT,
  abandonedWebsite        BOOLEAN,
  timestamp               TEXT
);

CREATE TABLE IF NOT EXISTS abandoned(
  id                      INTEGER PRIMARY KEY,
  userID                  INTEGER NOT NULL,
  userAgent               TEXT NOT NULL,
  experimentGroup         TEXT CHECK( experimentGroup IN ('accessible','inaccessible') ) NOT NULL,
  askedForHelp            INTEGER NOT NULL,
  taskStartedAt           TEXT NOT NULL,
  taskFinishedAt          TEXT NOT NULL,
  taskAbandoned           BOOLEAN NOT NULL,
  timestamp               TEXT
);

CREATE TABLE IF NOT EXISTS wantFinalPaper(
  id            INTEGER PRIMARY KEY,
  email         TEXT NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS webVitals(
  id            INTEGER PRIMARY KEY,
  userID        INTEGER NOT NULL,
  metric        TEXT CHECK( metric IN ('FCP','LCP','CLS','FID','TTFB','Next.js-hydration','Next.js-route-change-to-render','Next.js-render') ) NOT NULL,
  value         INTEGER NOT NULL,
  timestamp     TEXT
);
