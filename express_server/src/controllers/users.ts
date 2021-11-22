import type { RequestHandler } from "express";
import { generateToken } from "../lib/jwt";
import * as dbClient from "../db/client";

const createUserController: RequestHandler = (req, res) => {
    const { username, email, password } = req.body;

    // validate input

    dbClient.createUser(
        { username, email, password },
        (err) => {
            res.status(400).json({ success: false, msg: err.message });
        },
        (user) => {
            const token = generateToken(user);

            res.status(201).json({ success: true, token });
        }
    );
};

export { createUserController };
