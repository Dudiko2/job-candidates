import { dbClient } from "../db";
import type { RequestHandler } from "express";

const getCandidatesController: RequestHandler = (req, res) => {
    dbClient.getCandidates(
        (err) => {
            res.status(500).json({ success: false, msg: err.message });
        },
        (data) => {
            res.json({ success: true, candidates: data });
        }
    );
};

export { getCandidatesController };
