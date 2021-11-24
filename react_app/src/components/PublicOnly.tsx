import type { FC } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { ROUTES } from "../constants";
import { useAuth } from "../lib/auth/Auth";

const PublicOnly: FC = () => {
    const foo = useAuth();

    if (foo) return <Navigate to={ROUTES.INDEX} />;

    return <Outlet />;
};

export default PublicOnly;
