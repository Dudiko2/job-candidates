import bcrypt from "bcryptjs";
import { generateToken } from "../lib/jwt";
import { dbClient } from "../db";
import type { RequestHandler } from "express";

const signUpController: RequestHandler = (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password)
        return res.status(400).json({ success: false, msg: "Bad request" });

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

const signInController: RequestHandler = (req, res) => {
    const { email, password } = req.body;

    if (!email || !password)
        return res.status(400).json({ success: false, msg: "Bad request" });

    dbClient.getUser(
        email,
        (err) => {
            res.status(400).json({ success: false, msg: err.message });
        },
        (user) => {
            if (!user) {
                return res
                    .status(400)
                    .json({ success: false, msg: "Bad request" });
            }

            const validated = bcrypt.compareSync(password, user.password);

            if (!validated) {
                return res
                    .status(401)
                    .json({ success: false, msg: "Unauthorized" });
            }

            const token = generateToken({
                username: user.username,
                email: user.email
            });

            res.status(200).json({ success: true, token });
        }
    );
};

export { signUpController, signInController };
