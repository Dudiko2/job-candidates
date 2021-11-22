export interface IBaseUser {
    username: string;
    email: string;
}

export interface IUser extends IBaseUser {
    password: string;
}

export type ErrorCallback = (e: Error) => void;
export type SuccessCallback<T = unknown> = (data: T) => void;

export type ICreateUser = (
    user: IUser,
    onError: ErrorCallback,
    onSuccess: SuccessCallback<IBaseUser>
) => void;
