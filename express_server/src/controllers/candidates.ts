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

export { getCandidatesController };
