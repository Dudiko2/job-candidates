import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { verifyToken } from "../lib/jwt";
import type { RequestHandler } from "express";

const authenticateJWT: RequestHandler = (req, res, next) => {
    const auth = req.headers["authorization"];
    const token = auth?.split(" ")[1];

    // Check if bearer is the first word??

    if (!token) {
        return res
            .status(StatusCodes.UNAUTHORIZED)
            .json({ success: false, msg: ReasonPhrases.UNAUTHORIZED });
    }

    const verified = verifyToken(token);

    if (!verified) {
        return res
            .status(StatusCodes.UNAUTHORIZED)
            .json({ success: false, msg: ReasonPhrases.UNAUTHORIZED });
    }

    next();
};

export { authenticateJWT };
