const fs = require("fs");
const Database = require("better-sqlite3");
const db = new Database("experiment.sqlite3");

db.exec(fs.readFileSync("migrations/sql/00001_create.sql", "utf8"));
db.exec(fs.readFileSync("migrations/sql/00002_task_reading_time.sql", "utf8"));
db.exec(fs.readFileSync("migrations/sql/00003_prolific.sql", "utf8"));
