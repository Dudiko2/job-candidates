import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Restricted from "./components/Restricted";
import Home from "./pages";
import SignIn from "./pages/SignIn";
import NotFound from "./pages/NotFound";
import SignUp from "./pages/SignUp";
import Candidates from "./pages/Candidates";
import CandidateProfile from "./pages/Candidates/[id]";
import { AuthProvider } from "./lib/auth/Auth";
import { ROUTES } from "./constants";
import type { FC } from "react";
import "./App.css";

const App: FC = () => {
    return (
        <AuthProvider>
            <Routes>
                <Route path={ROUTES.INDEX} element={<Layout />}>
                    {/* home will redirect guests to /login, and registered users to /candidates */}
                    <Route index element={<Home />} />
                    <Route path={ROUTES.SIGNIN} element={<SignIn />} />
                    <Route path={ROUTES.SIGNUP} element={<SignUp />} />
                    <Route element={<Restricted />}>
                        <Route
                            path={ROUTES.CANDIDATES}
                            element={<Candidates />}
                        />
                        <Route
                            path={`${ROUTES.CANDIDATES}/:id`}
                            element={<CandidateProfile />}
                        />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </AuthProvider>
    );
};

export default App;
