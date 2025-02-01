import {memo, useCallback, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {classNames, Button, CustomInput, DynamicModuleLoader, ReducersList} from '@/shared';
import {loginActions, loginReducer} from '../../model/slice/loginSlice';
import {loginByUsername} from '../../model/services/loginByUsername';

import {getLoginUsername} from '../../model/selectors/getLoginUsername';
import {getLoginPassword} from '../../model/selectors/getLoginPassword';
import {getLoginIsLoading} from '../../model/selectors/getLoginIsLoading';
import {getLoginError} from '../../model/selectors/getloginError';

import {useAppDispatch} from '@/shared';

import * as s from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
  onSuccess: () => void;
};

const initReducers: ReducersList = {
  login: loginReducer
};

const LoginForm = memo(({className, onSuccess}: LoginFormProps) => {
  const dispatch = useAppDispatch();

  // dispatch

  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const onLoginClick = useCallback(async() => {
    const res = await dispatch(loginByUsername({username, password}) as ReturnType<typeof loginByUsername>);

    if (res.meta.requestStatus === 'fulfilled') {
      onSuccess();
    }

  }, [dispatch, username, password, onSuccess]);

  return (

    <DynamicModuleLoader reducers={initReducers} isRemoveUnmount>
      <div className={classNames(s.loginForm, {}, [className])}>
        <CustomInput
          type="text"
          placeholder="Username"
          onChange={onChangeUsername}
          value={username}
          autofocus
        />
        <CustomInput
          // type="password"
          type="text"
          placeholder="Password"
          onChange={onChangePassword}
          value={password}
        />

        {error && <p>{error}</p>}

        <Button
          onClick={onLoginClick}
          disabled={isLoading}
        >
          {'Войти'}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});

export default LoginForm;