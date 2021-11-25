import express from "express";
import {
    signUpController,
    signInController,
    getCurrentUserController,
    getCandidatesController,
    getCandidateByIdController
} from "../controllers";
import { authenticateJWT } from "../middleware/auth";

const api = express.Router();

api.post("/auth/signup", signUpController);

api.post("/auth/signin", signInController);

api.get("/me", authenticateJWT, getCurrentUserController);

api.get("/candidates", authenticateJWT, getCandidatesController);

api.post("/candidates", authenticateJWT, getCandidateByIdController);

export { api };
