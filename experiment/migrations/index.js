const fs = require("fs");
const Database = require("better-sqlite3");
const db = new Database("experiment.sqlite3");

const migration = fs.readFileSync("migrations/sql/00001_create.sql", "utf8");
db.exec(migration);
