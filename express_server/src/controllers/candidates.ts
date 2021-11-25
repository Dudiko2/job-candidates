import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { dbClient } from "../db";
import type { RequestHandler } from "express";

const getCandidatesController: RequestHandler = (req, res) => {
    dbClient.getCandidates(
        () => {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                success: false,
                msg: ReasonPhrases.INTERNAL_SERVER_ERROR
            });
        },
        (data) => {
            res.status(StatusCodes.OK).json({
                success: true,
                candidates: data
            });
        }
    );
};

const getCandidateByIdController: RequestHandler = (req, res) => {
    const { id } = req.body;

    if (!id || id <= 0)
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json({ success: false, msg: ReasonPhrases.BAD_REQUEST });

    dbClient.getCandidateById(
        id,
        (err) => {
            res.json({ success: false, msg: err.message });
        },
        (data) => {
            res.status(StatusCodes.OK).json({
                success: true,
                candidate: data
            });
        }
    );
};

export { getCandidatesController, getCandidateByIdController };
