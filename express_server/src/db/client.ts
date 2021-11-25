import bcrypt from "bcryptjs";
import connectDB from "./database";
import type {
    ICreateUser,
    IGetCandidateById,
    IGetCandidates,
    IGetUser
} from "../@types/db";

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

const getUser: IGetUser = (email, onError, onSuccess) => {
    db.get(
        `SELECT username, email, password FROM user WHERE email='${email}'`,
        (err, row) => {
            if (err) return onError(err);

            return onSuccess(row);
        }
    );
};

const getCandidates: IGetCandidates = (onError, onSuccess) => {
    db.all(`SELECT * FROM candidate`, (err, rows) => {
        if (err) return onError(err);

        return onSuccess(rows);
    });
};

const getCandidateById: IGetCandidateById = (id, onError, onSuccess) => {
    if (id <= 0) return onError(new Error(`invalid id: ${id}`));
    db.get(`SELECT * FROM candidate WHERE id=${id}`, (err, row) => {
        if (err) return onError(err);

        return onSuccess(row);
    });
};

export { createUser, getUser, getCandidates, getCandidateById };
