import {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getAuthData, userActions} from '@/entities/User';
import {Button, ThemeButton, classNames} from '@/shared';
import LoginModal from './LoginModal';
// import * as s from './Auth.module.scss';

interface AuthProps {
  className?: string;
};

const Auth = ({className}: AuthProps) => {
  const [isOpen, setOpen] = useState(false);

  const dispatch = useDispatch();

  const onCloseModal = useCallback(() => {
    setOpen(false);
  }, []);

  const onShowModal = useCallback(() => {
    setOpen(true);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  const authData = useSelector(getAuthData);

  useEffect(() => {
    if (authData) {
      setOpen(false);
    }
  }, [authData]);

  return (
    <div /* className={classNames(s.auth, {}, [className])} */>
      <Button
        theme={ThemeButton.CLEAR}
        onClick={authData ? onLogout : onShowModal}
      >
        {authData ? 'Выйти' : 'Войти'}
      </Button>
      <LoginModal isOpen={isOpen} onClose={onCloseModal} />
    </div>
  );
};

export default Auth;