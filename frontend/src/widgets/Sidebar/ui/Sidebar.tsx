import {ReactNode} from 'react';
import {classNames} from '@/shared';
import * as s from './Sidebar.module.scss';

interface SidebarProps {
  children: ReactNode;
  className?: string;
};

export const Sidebar = ({children, className}: SidebarProps) => (
  <div className={classNames(s.sidebar, {}, [className])}>
    {children}
  </div>
);