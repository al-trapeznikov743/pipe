import {classNames} from '@/shared';
import {ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef} from 'react';
import * as s from './CustomInput.module.scss';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'
>

interface CustomInputProps extends HTMLInputProps{
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  autofocus?: boolean;
};

const CustomInput = memo(({
  className,
  value,
  onChange,
  type = 'text',
  autofocus,
  ...props
}: CustomInputProps) => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    autofocus && ref.current?.focus();
  }, [autofocus]);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) =>
    onChange?.(e.target.value);

  return (
    <div className={classNames(s.customInputWrapper, {}, [className])}>
      <input
        ref={ref}
        type={type}
        value={value}
        onChange={onChangeHandler}
        className={s.customInput}
        {...props}
      />
    </div>
  );
});

export default CustomInput;