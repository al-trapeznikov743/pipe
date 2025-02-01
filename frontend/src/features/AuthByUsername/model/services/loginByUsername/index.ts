import {ThunkConfig} from '@/app/providers/StoreProvider';
import {User, userActions} from '@/entities/User';
import {USER_LOCALSTORAGE_KEY} from '@/shared/const/localStorage';
import {createAsyncThunk} from '@reduxjs/toolkit';

interface LoginByUsernameProps {
  username: string;
  password: string;
};

export const loginByUsername = createAsyncThunk<
  User,
  LoginByUsernameProps,
  ThunkConfig<string>
>(
  'login/loginByUsername',
  async (authData, {extra, dispatch, rejectWithValue}) => {
    try {
      const response = await extra.api.post<User>('/login', authData);

      if (!response.data) {
        throw new Error('Invalid credentials');
      }

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
      dispatch(userActions.setAuthData(response.data));

      return response.data;
    } catch (e) {
      return rejectWithValue(e.message || 'Unknown error');
    }
  }
);