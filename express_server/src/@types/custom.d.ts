import * as express from "express";
import type { IDecodedUserJWT } from "./db";

declare module "express-serve-static-core" {
    export interface Request {
        user?: IDecodedUserJWT;
    }
}
