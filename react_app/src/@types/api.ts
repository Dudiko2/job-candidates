export type ApiAuthResponse = SuccessResponse | FailureResponse;
export type CandidatesResponse = CandidatesSuccessResponse | FailureResponse;

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
