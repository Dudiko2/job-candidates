import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Restricted from "./components/Restricted";
import PublicOnly from "./components/PublicOnly";
import Home from "./pages";
import SignIn from "./pages/SignIn";
import NotFound from "./pages/NotFound";
import SignUp from "./pages/SignUp";
import Candidates from "./pages/Candidates";
import CandidateProfile from "./pages/Candidates/[id]";
import { AuthProvider } from "./lib/auth";
import { ROUTES } from "./constants";
import type { FC } from "react";

const App: FC = () => {
    return (
        <AuthProvider>
            <Routes>
                <Route path={ROUTES.INDEX} element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route element={<PublicOnly />}>
                        <Route path={ROUTES.SIGNIN} element={<SignIn />} />
                        <Route path={ROUTES.SIGNUP} element={<SignUp />} />
                    </Route>
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
