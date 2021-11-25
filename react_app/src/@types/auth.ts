export type SignInCB = (
    creds: Credentials,
    cb: (token: string) => void
) => Promise<void>;

export type SignUpCB = (
    user: IUser,
    cb: (token: string) => void
) => Promise<void>;

export type GetCurrentUserCB = (
    token: string,
    cb: (user: IBaseUser | null) => void
) => Promise<void>;

export interface Credentials {
    email: string;
    password: string;
}

export interface IUser extends Credentials {
    username: string;
}

export interface IBaseUser {
    username: string;
    email: string;
}

export interface IAuthContext {
    user: IBaseUser | null;
    jwt: string | null;
    loading: boolean;
    signIn: (creds: Credentials) => Promise<void>;
    signUp: (user: IUser) => Promise<void>;
}
