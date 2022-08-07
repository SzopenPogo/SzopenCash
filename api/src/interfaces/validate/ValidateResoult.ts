import { SimpleResponse } from "../app/SimpleResponse";
import { AppErrorResponse } from "../app/AppErrorResponse";

export interface ValidateResoult {
  isValid: boolean;
  message: SimpleResponse | AppErrorResponse;
}