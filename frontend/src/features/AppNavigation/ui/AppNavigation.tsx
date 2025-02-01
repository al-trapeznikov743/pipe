import {Link} from 'react-router-dom';
import Sidebar from '@/widgets/Sidebar';
import ThemeSwitcher from '@/widgets/ThemeSwitcher';
import {Auth} from '@/features/AuthByUsername';
import * as s from './AppNavigation.module.scss';
// import {Suspense} from 'react';

const AppNavigation = () => (
  <Sidebar className={s.appNavigation}>
    <Auth />
    <Link to={'/'}>Main</Link>
    <Link to={'/chat'}>Chat</Link>
    <ThemeSwitcher />
  </Sidebar>
);

export default AppNavigation;