import { ERROR_CODE_DESC, ERROR_MESSAGE } from '../config/constant';

interface IErrorWrapper {
  code: number;
  error?: unknown;
  message?: string;
}

export class ErrorWrapper extends Error {
  public codeDesc: string | undefined;

  public code: number | undefined;

  constructor({ code, error = {}, message = ERROR_MESSAGE[code] }: IErrorWrapper) {
    super(message);
    Object.assign(this, error);
    this.codeDesc = ERROR_CODE_DESC[code];
    this.code = code;
  }
}

