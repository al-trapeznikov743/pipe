import {ReactNode} from 'react';
import {classNames} from '@/shared';
import * as s from './ListItem.module.scss';

interface ListItemProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

const ListItem = ({className, children, onClick}: ListItemProps) => {
  return (
    <div onClick={onClick} className={classNames(s.listItem, {}, [className])}>
      {children}
    </div>
  );
};

export default ListItem;