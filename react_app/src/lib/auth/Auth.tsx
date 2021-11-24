import { createContext, useContext } from "react";
import type { FC } from "react";

interface IAuthContext {
    user: any;
}

const AuthContext = createContext<IAuthContext>(null!);

export const AuthProvider: FC = ({ children }) => {
    // add api call to get current user, if exists
    return (
        <AuthContext.Provider value={{ user: "dudi" }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
