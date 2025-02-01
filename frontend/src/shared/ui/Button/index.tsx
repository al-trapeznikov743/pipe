import {ButtonHTMLAttributes, FC} from 'react';
import {classNames} from '@/shared';
import * as s from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
  TEXT = 'text',
  LINK = 'link',
  ERROR = 'error',
  WARNING = 'warning',
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
  disabled?: boolean;
};

export const Button: FC<ButtonProps> = ({className, theme, disabled, children, ...props}) => {
  const mods: Record<string, boolean> = {
    [s.disabled]: disabled
  };

  return (
    <button
      className={classNames(s.button, {}, [className, s[theme]])}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};