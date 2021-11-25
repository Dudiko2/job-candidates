import { FC, useEffect, useState } from "react";
import { ICandidate } from "../../@types";
import CandidateCard from "../../components/CandidateCard";
import { useAuth } from "../../lib/auth";
import apiClient from "../../services/api";
import styles from "../../styles/Candidates.module.css";

const Candidates: FC = () => {
    const { jwt } = useAuth();
    const [candidates, setCandidates] = useState<ICandidate[]>([]);

    useEffect(() => {
        if (jwt) {
            apiClient
                .getCandidates(jwt)
                .then((r) => setCandidates(r.data.candidates));
        }
    }, [jwt]);

    return (
        <>
            <h1 className={styles.title}>Candidates</h1>
            <div className={styles.Candidates}>
                {candidates.map((v) => (
                    <CandidateCard key={v.id + v.last_name} candidate={v} />
                ))}
            </div>
        </>
    );
};

export default Candidates;
