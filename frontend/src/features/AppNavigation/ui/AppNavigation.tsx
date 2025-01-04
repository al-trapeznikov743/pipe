import {Link} from 'react-router-dom';
import Sidebar from '@/widgets/Sidebar';
import ThemeSwitcher from '@/widgets/ThemeSwitcher';
import * as s from './AppNavigation.module.scss';

export const AppNavigation = () => (
  <Sidebar className={s.appNavigation}>
    <Link to={'/'}>Main</Link>
    <Link to={'/chat'}>Chat</Link>
    <ThemeSwitcher />
  </Sidebar>
);