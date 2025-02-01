import { getAuthData } from './model/selectors/getAuthData';
import {userReducer, userActions} from './model/slice/userSlice';
import {UserSchema, User} from './model/types/user';

export {
  userReducer,
  userActions,
  User,
  UserSchema,
  getAuthData
};