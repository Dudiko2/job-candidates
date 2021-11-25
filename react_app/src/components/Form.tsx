import type { FC } from "react";
import styles from "../styles/Form.module.css";

interface Props {
    onSubmit: (e: any) => void;
}

const Form: FC<Props> = ({ children, onSubmit }) => {
    return (
        <div className={styles.FormWrapper}>
            <form className={styles.Form} onSubmit={onSubmit}>
                {children}
            </form>
        </div>
    );
};

export default Form;
