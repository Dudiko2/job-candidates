import type { FC } from "react";
import styles from "../styles/FormInput.module.css";

interface Props {
    type: "text" | "password" | "email";
    value?: string;
    onInput?: (e: any) => void;
    id: string;
    label?: string;
}

const FormInput: FC<Props> = ({
    type,
    value = "",
    onInput,
    id,
    label = "",
}) => {
    return (
        <div className={styles.FormInput}>
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} value={value} onInput={onInput} />
        </div>
    );
};

export default FormInput;
