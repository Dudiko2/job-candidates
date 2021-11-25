import { FC, useEffect, useState } from "react";
import { useLocation, Navigate, NavLink } from "react-router-dom";
import { ICandidate } from "../../@types";
import { ROUTES } from "../../constants";
import { useAuth } from "../../lib/auth";
import apiClient from "../../services/api";
import styles from "../../styles/CandidateProfile.module.css";

const CandidateProfile: FC = () => {
    const location = useLocation();
    const { jwt } = useAuth();
    const [candidate, setCandidate] = useState<ICandidate | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<unknown>(null);

    const id = location.state?.id;

    useEffect(() => {
        const fetcher = async () => {
            if (jwt && id) {
                try {
                    setLoading(true);
                    const res = await apiClient.getCandidateById(jwt, id);
                    setCandidate(res.data.candidate);
                } catch (error) {
                    setError(error);
                } finally {
                    setLoading(false);
                }
            }
        };

        fetcher();
    }, [jwt, id]);

    if (!id || id <= 0 || error) return <Navigate to={ROUTES.CANDIDATES} />;

    if (loading) return <div>loading</div>;

    if (candidate)
        return (
            <div className={styles.CandidateProfile}>
                <NavLink
                    className={styles.buttonLink}
                    to={`${ROUTES.CANDIDATES}`}
                    state={candidate}
                >
                    <button>back</button>
                </NavLink>
                <div className={styles.avatarWrapper}>
                    <div className={styles.avatar}>
                        <img src={candidate.avatar} alt="Candidate's avatar" />
                    </div>
                </div>
                <div className={styles.text}>
                    <span
                        className={styles.name}
                    >{`${candidate.first_name} ${candidate.last_name}`}</span>
                    <span className={styles.job}>{candidate.job_title}</span>
                    <span className={styles.gender}>{candidate.gender}</span>
                    <span className={styles.jobdesc}>
                        {candidate.job_description}
                    </span>
                </div>
            </div>
        );

    return <div></div>;
};

export default CandidateProfile;
