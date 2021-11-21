import express from "express";
import startDB from "./db/database";

const setup = async () => {
    const db = startDB();
    const app = express();

    // set port, listen for requests
    const PORT = 8080;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}.`);
    });
};

setup();
