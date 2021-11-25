import apiClient from "../../services/api";
import type { SignInCB, SignUpCB, GetCurrentUserCB } from "../../@types/index";

export const signInCB: SignInCB = async ({ email, password }, callback) => {
    const res = await apiClient.signIn({ email, password });

    if (res.data.success) {
        const token = res.data?.token;
        callback(token);
    }
};

export const signUpCB: SignUpCB = async (
    { username, email, password },
    callback
) => {
    const res = await apiClient.signUp({ username, email, password });

    if (res.data.success) {
        const token = res.data?.token;
        callback(token);
    }
};

export const getCurrentUserCB: GetCurrentUserCB = async (token, callback) => {
    const res = await apiClient.getCurrentUser(token);

    if (res.data.success) {
        const user = res.data.user;
        return callback(user);
    }

    callback(null);
};
