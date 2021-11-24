export interface IBaseUser {
    username: string;
    email: string;
}

export interface IUser extends IBaseUser {
    password: string;
}

export interface IDecodedUserJWT extends IBaseUser {
    iat: number;
}

export type ErrorCallback = (e: Error) => void;
export type SuccessCallback<T = unknown> = (data: T) => void;

export type ICreateUser = (
    user: IUser,
    onError: ErrorCallback,
    onSuccess: SuccessCallback<IBaseUser>
) => void;

export type IGetUser = (
    email: string,
    onError: ErrorCallback,
    onSuccess: SuccessCallback<IUser>
) => void;

export type IGetCandidates = (
    onError: ErrorCallback,
    onSuccess: SuccessCallback<any[]>
) => void;
