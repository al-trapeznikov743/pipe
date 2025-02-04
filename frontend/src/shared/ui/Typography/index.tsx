import {ReactNode} from 'react';
import {classNames} from '@/shared';
import * as s from './Typography.module.scss';

interface indexProps {
  className?: string;
  children: ReactNode;
};

const Typography = ({className, children}: indexProps) => {
  return (
    <div className={classNames(s.typography, {}, [className])}>
      {children}
    </div>
  );
};

export default Typography;