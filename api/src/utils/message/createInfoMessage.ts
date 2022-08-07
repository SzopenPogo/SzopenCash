import { SimpleResponse } from "../../interfaces/app/SimpleResponse"

export const createInfoMessage = (
  status: number, 
  message: string
): SimpleResponse => {
  return {
    status,
    message
  }
}