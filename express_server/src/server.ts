import express from "express";
import { api } from "./routes";

const setup = () => {
    const app = express();

    app.use(express.json());

    // channel requests via /api to the api router
    app.use("/api", api);

    // set port, listen for requests
    const PORT = 8080;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}.`);
    });
};

setup();
