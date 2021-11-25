import type { FC } from "react";
import { Navigate } from "react-router-dom";
import { ROUTES } from "../constants";
import { useAuth } from "../lib/auth";

const Home: FC = () => {
    const { user } = useAuth();

    if (user) return <Navigate to={ROUTES.CANDIDATES} />;

    return <Navigate to={ROUTES.SIGNIN} />;
};

export default Home;
