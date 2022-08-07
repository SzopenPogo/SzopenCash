import { Document } from 'mongoose';
import { SimpleResponse } from '../app/SimpleResponse';
import { UserData } from './UserData';

export interface UserModel extends Document, UserData {
  [key: string]: any;
  _id: string;

  generateAuthToken(): Promise<string>;
  clearTokens(): Promise<void>;
  toggleActive(): Promise<void>;
  editUserData(
    reqBody: any, 
    allowedUpdates: Array<string>, 
    currentPassword?: string
  ): Promise<SimpleResponse>;
}