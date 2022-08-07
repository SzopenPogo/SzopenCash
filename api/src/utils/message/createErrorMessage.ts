import { AppErrorResponse } from "../../interfaces/app/AppErrorResponse"

export const createErrorMessage = (
  status: number , 
  message: string, 
  error?: any
): AppErrorResponse => {
  return {
    status,
    message,
    error
  }
}