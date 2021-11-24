import { createContext, useContext, useEffect, useState } from "react";
import type { FC } from "react";
import apiClient from "../../services/api";
import { Credentials, IUser, SignInCB, SignUpCB } from "../../@types";

interface IAuthContext {
    user: any;
    signIn: (creds: Credentials) => Promise<void>;
    signUp: (user: IUser) => Promise<void>;
}

const AuthContext = createContext<IAuthContext>(null!);

export const AuthProvider: FC = ({ children }) => {
    const [jwt, setJwt] = useState("");
    const [user, setUser] = useState(null);

    const signIn = ({ email, password }: Credentials) =>
        signInCB({ email, password }, setJwt);

    const signUp = ({ username, email, password }: IUser) =>
        signUpCB({ username, email, password }, setJwt);

    useEffect(() => {
        if (jwt?.length > 0) {
            apiClient.getCurrentUser(jwt).then((r) => setUser(r.data));
        }
    }, [jwt]);

    return (
        <AuthContext.Provider value={{ user, signIn, signUp }}>
            {children}
        </AuthContext.Provider>
    );
};

const signInCB: SignInCB = async ({ email, password }, callback) => {
    const res = await apiClient.signIn({ email, password });

    if (res.data.success) {
        const token = res.data?.token;
        callback(token);
    }
};

const signUpCB: SignUpCB = async ({ username, email, password }, callback) => {
    const res = await apiClient.signUp({ username, email, password });

    if (res.data.success) {
        const token = res.data?.token;
        callback(token);
    }
};

export const useAuth = () => {
    return useContext(AuthContext);
};
