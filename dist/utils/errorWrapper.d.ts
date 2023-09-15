interface IErrorWrapper {
    code: number;
    error?: unknown;
    message?: string;
}
export declare class ErrorWrapper extends Error {
    codeDesc: string | undefined;
    code: number | undefined;
    constructor({ code, error, message }: IErrorWrapper);
}
export {};
