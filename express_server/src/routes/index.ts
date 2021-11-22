import express from "express";
import {
    signUpController,
    signInController,
    getCandidatesController
} from "../controllers";
import { authenticateJWT } from "../middleware/auth";

const api = express.Router();

api.post("/auth/signup", signUpController);

api.post("/auth/signin", signInController);

api.get("/candidates", authenticateJWT, getCandidatesController);

export { api };
