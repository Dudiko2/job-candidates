import type { RequestHandler } from "express";
import { verifyToken } from "../lib/jwt";

const authenticateJWT: RequestHandler = (req, res, next) => {
    const auth = req.headers["authorization"];
    const token = auth?.split(" ")[1];

    // Check if bearer is the first word??

    if (!token) {
        return res.status(401).json({ success: false, msg: "Unauthorized" });
    }

    const verified = verifyToken(token);

    if (!verified) {
        return res.status(401).json({ success: false, msg: "Unauthorized" });
    }

    next();
};

export { authenticateJWT };
