export type TryCatchAsync = <T>(
    f: () => Promise<T>
) => Promise<[T, null] | [null, unknown]>;

export type TryCatch = <T>(f: () => T) => [T, null] | [null, unknown];
