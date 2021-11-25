import { FC } from "react";
import { NavLink } from "react-router-dom";
import { ICandidate } from "../@types";
import { ROUTES } from "../constants";
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
            <NavLink
                className={styles.buttonLink}
                to={`${ROUTES.CANDIDATES}/${candidate.id}`}
                state={candidate}
            >
                <button>view profile</button>
            </NavLink>
        </div>
    );
};

export default CandidateCard;
