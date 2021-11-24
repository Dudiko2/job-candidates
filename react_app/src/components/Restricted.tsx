import type { FC } from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { ROUTES } from "../constants";
import { useAuth } from "../lib/auth/Auth";

const Restricted: FC = () => {
    const foo = useAuth();
    const location = useLocation();

    console.log(foo);

    if (foo) return <Outlet />;

    return <Navigate to={ROUTES.SIGNIN} state={{ from: location }} />;
};

export default Restricted;
