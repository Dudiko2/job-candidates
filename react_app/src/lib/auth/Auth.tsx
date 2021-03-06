import { createContext, useContext, useEffect, useState } from "react";
import { signInCB, signUpCB, getCurrentUserCB } from "./handlers";
import type { FC } from "react";
import type { Credentials, IUser, IBaseUser, IAuthContext } from "../../@types";

const AuthContext = createContext<IAuthContext>(null!);

export const AuthProvider: FC = ({ children }) => {
    const [jwt, setJwt] = useState<string | null>(null);
    const [user, setUser] = useState<IBaseUser | null>(null);
    const [loading, setLoading] = useState(false);

    const signIn = ({ email, password }: Credentials) =>
        signInCB({ email, password }, setJwt);

    const signUp = ({ username, email, password }: IUser) =>
        signUpCB({ username, email, password }, setJwt);

    const getCurrentUser = async (token: string) => {
        setLoading(true);
        await getCurrentUserCB(token, setUser);
        setLoading(false);
    };

    useEffect(() => {
        if (jwt) {
            getCurrentUser(jwt);
        }
    }, [jwt]);

    return (
        <AuthContext.Provider value={{ user, jwt, loading, signIn, signUp }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
