import axios from "axios";
import {
    Credentials,
    IUser,
    ApiAuthResponse,
    CandidatesSuccessResponse,
    UserResponse,
    CandidateSuccessResponse,
} from "../@types";

const axiosInstance = axios.create({
    baseURL: "http://localhost:8080/api/",
});

const getCurrentUser = (token: string) => {
    return axiosInstance.get<UserResponse>("/me", {
        headers: { Authorization: `Bearer ${token}` },
    });
};

const signIn = ({ email, password }: Credentials) => {
    return axiosInstance.post<ApiAuthResponse>("/auth/signin", {
        email,
        password,
    });
};

const signUp = ({ username, email, password }: IUser) => {
    return axiosInstance.post<ApiAuthResponse>("/auth/signup", {
        username,
        email,
        password,
    });
};

const getCandidates = (token: string) => {
    return axiosInstance.get<CandidatesSuccessResponse>("/candidates", {
        headers: { Authorization: `Bearer ${token}` },
    });
};

const getCandidateById = (token: string, id: number) => {
    return axiosInstance.post<CandidateSuccessResponse>(
        "/candidates",
        { id },
        {
            headers: { Authorization: `Bearer ${token}` },
        }
    );
};

const apiClient = {
    getCurrentUser,
    signIn,
    signUp,
    getCandidates,
    getCandidateById,
};

export default apiClient;
