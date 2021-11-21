import sqlite from "sqlite3";
// const sqlite3 = require("sqlite3").verbose();
const sqlite3 = sqlite.verbose();
const DBSOURCE = "./src/db/db.sqlite";

const db = () => {
    new sqlite3.Database(DBSOURCE, (err) => {
        if (err) {
            // Cannot open database
            console.error(err.message);
            throw err;
        } else {
            console.log("Connected to the SQLite database.");
        }
    });
};

export default db;
