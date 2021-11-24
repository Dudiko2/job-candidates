import { IBaseUser } from "./auth";

export type ApiAuthResponse = SuccessResponse | FailureResponse;
export type CandidatesResponse = CandidatesSuccessResponse | FailureResponse;
export type UserResponse = UserSuccessResponse | FailureResponse;

export interface SuccessResponse {
    success: true;
    token: string;
}

export interface FailureResponse {
    success: false;
    msg: string;
}

export interface CandidatesSuccessResponse {
    success: true;
    candidates: any[];
}

export interface UserSuccessResponse {
    success: true;
    user: IBaseUser;
}
