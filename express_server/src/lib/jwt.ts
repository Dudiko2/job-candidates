import jwt from "jsonwebtoken";
import { tryCatch } from "../utils/utils";

const secret = process.env.JWT_SECRET || "betteruseENV";

const generateToken = (payload: string | object | Buffer) => {
    if (!secret) return null;

    const token = jwt.sign(payload, secret);

    return token;
};

const verifyToken = (token: string) => {
    const [decoded, error] = tryCatch(() => jwt.verify(token, secret));

    if (error) return null;

    return decoded;
};

export { generateToken, verifyToken };
