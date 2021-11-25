import { FC } from "react";
import { ICandidate } from "../@types";
import styles from "../styles/CandidateCard.module.css";

interface Props {
    candidate: ICandidate;
}

const CandidateCard: FC<Props> = ({ candidate }) => {
    return (
        <div className={styles.CandidateCard}>
            <div className={styles.avatar}>
                <img src={candidate.avatar} alt="Candidate's avatar" />
            </div>
            <div className={styles.text}>
                <span
                    className={styles.name}
                >{`${candidate.first_name} ${candidate.last_name}`}</span>
                <span className={styles.job}>{candidate.job_title}</span>
            </div>
            <button className={styles.button}>view profile</button>
        </div>
    );
};

export default CandidateCard;
