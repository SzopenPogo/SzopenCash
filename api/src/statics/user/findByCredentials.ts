import bcryptjs from 'bcryptjs';
import User from '../../models/userModel';

export const findByCredentials = async (userName: string, password: string) => {
  const user = await User.findOne({ userName });
  if (!user) {
    throw new Error('User not found');
  }

  const isPasswordValid = await bcryptjs.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error('Invalid Password');
  }

  return user;
}