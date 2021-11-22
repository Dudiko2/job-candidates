import type { TryCatch, TryCatchAsync } from "../@types/utils";

const tryCatchAsync: TryCatchAsync = async (f) => {
    try {
        const data = await f();
        return [data, null];
    } catch (error) {
        return [null, error];
    }
};

const tryCatch: TryCatch = (f) => {
    try {
        const data = f();
        return [data, null];
    } catch (error) {
        return [null, error];
    }
};

export { tryCatchAsync, tryCatch };
