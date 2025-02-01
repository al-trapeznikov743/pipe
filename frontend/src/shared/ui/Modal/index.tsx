import {ReactNode, MouseEvent, useEffect, useCallback} from 'react';
import {classNames, Portal} from '@/shared';
import * as s from './Modal.module.scss';

interface ModalProps {
  className?: string;
  children: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
};

const Modal = ({className, children, isOpen, onClose}: ModalProps) => {
  const closeHandler = useCallback(() => {
    onClose && onClose();
  }, [onClose]);

  const onContentClick = (e: MouseEvent) => {
    e.stopPropagation();
  };

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeHandler();
    }
  }, [closeHandler]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }

    return () => window.removeEventListener('keyDown', onKeyDown);
  }, [isOpen, onKeyDown]);

  return isOpen ? (
    <Portal>
      <div className={classNames(s.modal, {}, [className])}>
        <div className={s.overlay} onClick={closeHandler}>
          <div
            className={s.content}
            onClick={onContentClick}
          >
            {children}
          </div>
        </div>
      </div>
    </Portal>
  ) : null;
};

export default Modal;