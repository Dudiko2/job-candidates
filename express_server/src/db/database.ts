import sqlite from "sqlite3";
const sqlite3 = sqlite.verbose();
const DBSOURCE = "./src/db/db.sqlite";

const connectDB = () => {
    return new sqlite3.Database(DBSOURCE, (err) => {
        if (err) {
            // Cannot open database
            console.error(err.message);
            throw err;
        } else {
            console.log("Connected to the SQLite database.");
        }
    });
};

export default connectDB;
