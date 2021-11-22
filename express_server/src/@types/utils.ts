type TryCatchAsync = <T>(
    f: () => Promise<T>
) => Promise<[T, null] | [null, unknown]>;

type TryCatch = <T>(f: () => T) => [T, null] | [null, unknown];

export { TryCatchAsync, TryCatch };
