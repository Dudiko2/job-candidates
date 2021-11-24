export type SignInCB = (
    creds: Credentials,
    cb: (token: string) => void
) => Promise<void>;

export type SignUpCB = (
    user: IUser,
    cb: (token: string) => void
) => Promise<void>;

export interface Credentials {
    email: string;
    password: string;
}

export interface IUser extends Credentials {
    username: string;
}
