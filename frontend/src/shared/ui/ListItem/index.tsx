import {ReactNode} from 'react';
import {classNames} from '@/shared';
import * as s from './ListItem.module.scss';

interface ListItemProps {
  children: ReactNode;
  className?: string;
};

const ListItem = ({className, children}: ListItemProps) => {
  return (
    <div className={classNames(s.listItem, {}, [className])}>
      {children}
    </div>
  );
};

export default ListItem;