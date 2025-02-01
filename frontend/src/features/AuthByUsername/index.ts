// import {lazy} from 'react';
import {LoginSchema} from './model/types/loginSchema';
import {loginReducer} from './model/slice/loginSlice';
import Auth from './ui/Auth';

// const Auth = lazy(() => import('./ui/Auth'));

export {Auth, LoginSchema, loginReducer};