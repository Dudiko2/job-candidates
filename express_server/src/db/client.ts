import bcrypt from "bcryptjs";
import connectDB from "./database";
import type { ICreateUser } from "../@types/db";

const db = connectDB();

const createUser: ICreateUser = (
    { username, email, password },
    onError,
    onSuccess
) => {
    const hashed = bcrypt.hashSync(password, 8);

    db.run(
        `INSERT INTO user (username, email, password) VALUES ('${username}', '${email}', '${hashed}')`,
        (err) => {
            if (err) return onError(err);

            return onSuccess({ username, email });
        }
    );
};

export { createUser };
