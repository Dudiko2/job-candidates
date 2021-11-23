import bcrypt from "bcryptjs";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { generateToken } from "../lib/jwt";
import { dbClient } from "../db";
import type { RequestHandler } from "express";

const signUpController: RequestHandler = (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password)
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json({ success: false, msg: ReasonPhrases.BAD_REQUEST });

    dbClient.createUser(
        { username, email, password },
        () => {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                success: false,
                msg: ReasonPhrases.INTERNAL_SERVER_ERROR
            });
        },
        (user) => {
            const token = generateToken(user);

            res.status(StatusCodes.CREATED).json({ success: true, token });
        }
    );
};

const signInController: RequestHandler = (req, res) => {
    const { email, password } = req.body;

    if (!email || !password)
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json({ success: false, msg: ReasonPhrases.BAD_REQUEST });

    dbClient.getUser(
        email,
        (err) => {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                success: false,
                msg: err.message
            });
        },
        (user) => {
            if (!user) {
                return res
                    .status(StatusCodes.NOT_FOUND)
                    .json({ success: false, msg: ReasonPhrases.NOT_FOUND });
            }

            const validated = bcrypt.compareSync(password, user.password);

            if (!validated) {
                return res
                    .status(StatusCodes.UNAUTHORIZED)
                    .json({ success: false, msg: ReasonPhrases.UNAUTHORIZED });
            }

            const token = generateToken({
                username: user.username,
                email: user.email
            });

            res.status(StatusCodes.OK).json({ success: true, token });
        }
    );
};

export { signUpController, signInController };
