import {UserSchema} from '@/entities/User';
import {LoginSchema} from '@/features/AuthByUsername';
import {createReduxStore} from './store';
import {AxiosInstance} from 'axios';
import {
  Action,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
  ThunkDispatch
} from '@reduxjs/toolkit';
import {NavigateOptions, To} from 'react-router-dom';
import {ChatsSchema} from '@/features/Chats';

export interface StateSchema {
  user: UserSchema;
  // async
  login?: LoginSchema;
  chats?: ChatsSchema;
};

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: Action) => StateSchema;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export interface ExtendedStore extends EnhancedStore<StateSchema> {
  reducerManager?: ReducerManager;
};

export type RootState = ReturnType<typeof createReduxStore> extends {
  getState: () => infer S;
} ? S : never;

export type AppDispatchType = ReturnType<typeof createReduxStore>['dispatch'];
export type AppDispatch = ThunkDispatch<RootState, undefined, Action>;

interface ThunkExtra {
  api: AxiosInstance;
  navigate: (to: To, options?: NavigateOptions) => void;
};

export interface ThunkConfig<T> {
  rejectValue: T,
  extra: ThunkExtra
};