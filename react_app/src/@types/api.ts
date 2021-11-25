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
    candidates: ICandidate[];
}

export interface UserSuccessResponse {
    success: true;
    user: IBaseUser;
}

export interface ICandidate {
    first_name: string;
    last_name: string;
    avatar: string;
    gender: string;
    id: number;
    job_title: string;
    job_description: string;
}
