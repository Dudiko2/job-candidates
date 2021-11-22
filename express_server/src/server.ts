import express from "express";
import { createUserController } from "./controllers";

const setup = async () => {
    const app = express();
    const api = express.Router();

    app.use(express.json());

    console.log("seperate handlers from routes");

    api.post("/auth/signup", createUserController);

    api.post("/auth/signin", (req, res) => {
        const { password } = req.body;
        // validate pw
        // gen token
        // save

        // return
    });

    api.get("/candidates", (req, res) => {
        console.log("use auth middleware on the route");
        // pull candidates from DB
    });

    // channel requests via /api to the api router
    app.use("/api", api);

    // set port, listen for requests
    const PORT = 8080;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}.`);
    });
};

setup();
