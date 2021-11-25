import { FC, useState } from "react";
import { NavLink } from "react-router-dom";
import Form from "../components/Form";
import FormButton from "../components/FormButton";
import FormInput from "../components/FormInput";
import { ROUTES } from "../constants";
import { useAuth } from "../lib/auth";

const SignIn: FC = () => {
    return (
        <div>
            <SignInForm />
        </div>
    );
};

const SignInForm: FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { signIn } = useAuth();

    const handleSubmit = (e: any) => {
        e.preventDefault();
        signIn({ email, password }).catch((err) => console.log(err));
    };

    return (
        <Form onSubmit={handleSubmit}>
            <h3>SIGN IN</h3>
            <FormInput
                label="Email"
                id="signinemail"
                type="email"
                value={email}
                onInput={(e) => setEmail(e.target.value)}
            />
            <FormInput
                label="Password"
                id="signinpassword"
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
                <NavLink to={ROUTES.SIGNUP}>
                    <FormButton type="button">sign up</FormButton>
                </NavLink>
            </div>
        </Form>
    );
};

export default SignIn;
