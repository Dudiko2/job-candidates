import type { FC } from "react";
import styles from "../styles/FormButton.module.css";

interface Props {
    type: "submit" | "button";
    primary?: "false" | "true";
}

const FormButton: FC<Props> = ({ children, type, primary = "false" }) => {
    return (
        <button
            className={styles.FormButton}
            type={type}
            data-primary={primary}
        >
            {children}
        </button>
    );
};

export default FormButton;
