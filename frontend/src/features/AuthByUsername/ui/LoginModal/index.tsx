import {classNames, Modal} from '@/shared';
import {LoginForm} from '../LoginForm';
import {Suspense} from 'react';
import * as s from './LoginModal.module.scss';

interface LoginModalProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
};

const LoginModal = ({className, isOpen, onClose}: LoginModalProps) => {
  return (
    <Modal
      className={classNames(s.loginModal, {}, [className])}
      isOpen={isOpen}
      onClose={onClose}
    >
      <Suspense>
        <LoginForm onSuccess={onClose} />
      </Suspense>
    </Modal>
  );
};

export default LoginModal;