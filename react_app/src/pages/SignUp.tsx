import { FC, useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../lib/auth";
import Form from "../components/Form";
import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";
import { ROUTES } from "../constants";

const SignUp: FC = () => {
    return (
        <div>
            <SignUpForm />
        </div>
    );
};

const SignUpForm: FC = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { signUp } = useAuth();

    const handleSubmit = (e: any) => {
        e.preventDefault();
        signUp({ username, email, password }).catch((err) => console.log(err));
    };

    return (
        <Form onSubmit={handleSubmit}>
            <h3>SIGN UP</h3>
            <FormInput
                label="Username"
                id="signupusername"
                type="text"
                value={username}
                onInput={(e) => setUsername(e.target.value)}
            />
            <FormInput
                label="Email"
                id="signupemail"
                type="email"
                value={email}
                onInput={(e) => setEmail(e.target.value)}
            />
            <FormInput
                label="Password"
                id="signuppassword"
                type="password"
                value={password}
                onInput={(e) => setPassword(e.target.value)}
            />
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                }}
            >
                <FormButton type="submit" primary="true">
                    confirm
                </FormButton>
                <NavLink to={ROUTES.SIGNIN}>
                    <FormButton type="button">sign in</FormButton>
                </NavLink>
            </div>
        </Form>
    );
};

export default SignUp;
