import { model, Schema } from "mongoose";
import { passwordRegExp, PASSWORD_MIN_LENGTH } from "../constants/user/password";
import { UserModel } from "../interfaces/user/UserModel";
import { UserStatics } from "../interfaces/user/UserStatics";
import { clearTokens } from "../methods/user/clearTokens";
import { generateAuthToken } from "../methods/user/generateAuthToken";
import { toggleActive } from "../methods/user/toggleActive";
import { findByCredentials } from "../statics/user/findByCredentials";
import bcryptjs from 'bcryptjs';
import { editUserData } from "../methods/user/editUserData";
import { USER_NAME_MIN_LENGHT } from "../constants/user/userData";

const userSchema = new Schema<UserModel, UserStatics>({
  userName: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    minlength: USER_NAME_MIN_LENGHT
  },

  password: {
    type: String,
    required: true,
    trim: true,
    minlength: PASSWORD_MIN_LENGTH,
    validate(value: string) {
      if (!passwordRegExp.test(value)) {
        throw new Error('Weak password');
      }
    }
  },

  isAdmin: {
    type: Boolean,
    default: false
  },

  isActive: {
    type: Boolean,
    default: true
  },

  tokens: [{
    token: {
      type: String,
      required: true
    }
  }]
}, {
  timestamps: true
});

//Not expose data
userSchema.methods.toJSON = function () {
  const user = this;

  const userObject = user.toObject();

  delete userObject.password;
  delete userObject.__v;
  delete userObject.tokens;

  return userObject;
}


// STATICS - findByCredentials (find user by userName and password)
userSchema.statics.findByCredentials = async (userName: string, password: string) => {
  return await findByCredentials(userName, password);
}

// METHODS - generateAuthToken (generate authentication token)
userSchema.methods.generateAuthToken = async function (this: UserModel) {
  return await generateAuthToken(this);
}

// METHODS - clearTokens (remove all user tokens)
userSchema.methods.clearTokens = async function (this: UserModel) {
  await clearTokens(this);
}

// METHODS - toggleActive (toggle user active)
userSchema.methods.toggleActive = async function (this: UserModel) {
  await toggleActive(this);
}

// METHODS - editUserData (edit user data)
userSchema.methods.editUserData = async function (
  this: UserModel,
  requestBody: any,
  allowedUpdates: Array<string>,
  currentPassword?: string
) {
  if(currentPassword) {
    return await editUserData(this, requestBody, allowedUpdates, currentPassword);
  }
  
  return await editUserData(this, requestBody, allowedUpdates);
}

// PRE SAVE
userSchema.pre('save', async function (next) {
  const user = this;

  // Hash password
  if (user.isModified('password')) {
    user.password = await bcryptjs.hash(user.password, 8);
  }

  next();
});

const User = model<UserModel, UserStatics>('User', userSchema);
export default User;