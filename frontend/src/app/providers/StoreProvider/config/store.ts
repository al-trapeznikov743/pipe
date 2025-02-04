import {TypedUseSelectorHook, useSelector} from 'react-redux';
import {NavigateOptions, To} from 'react-router-dom';
import {configureStore, ReducersMapObject} from '@reduxjs/toolkit';
import {ExtendedStore, RootState, StateSchema} from './StateSchema';
import {createReducerManager} from './reducerManager';
import {userReducer} from '@/entities/User';
import {api} from '@/api/api';

export const createReduxStore = (
  initialState?: StateSchema,
  navigate?: (to: To, options?: NavigateOptions) => void
) => {
  const rootReducers: ReducersMapObject<StateSchema> = {
    user: userReducer
  };

  const reducerManager = createReducerManager(rootReducers);

  const store: ExtendedStore = configureStore<StateSchema>({
    reducer: reducerManager.reduce,
    preloadedState: initialState,
    devTools: __IS_DEV__,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: {
        extraArgument: {api: api, navigate}
      }
    })
  });

  store.reducerManager = reducerManager;

  return store;
};

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;