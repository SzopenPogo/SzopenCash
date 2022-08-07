import { Model } from 'mongoose';
import { UserModel } from './UserModel';

export interface UserStatics extends Model<UserModel> {
  findByCredentials(userName: string, password: string): Promise<UserModel>;
}