import {createReduxStore} from './config/store';
import {StoreProvider} from './ui/StoreProvider';
import {
  StateSchema,
  ExtendedStore,
  AppDispatch,
  ThunkConfig
} from './config/StateSchema';

export {
  StoreProvider,
  createReduxStore,
  StateSchema,
  ExtendedStore,
  AppDispatch,
  ThunkConfig
};