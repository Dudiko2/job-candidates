import type { FC } from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../lib/auth/Auth";

const PublicOnly: FC = () => {
    const { user } = useAuth();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    if (user) return <Navigate to={from} replace />;

    return <Outlet />;
};

export default PublicOnly;
