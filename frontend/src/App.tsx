import React, {Suspense, ReactNode} from 'react';
import {Route, Routes, Link} from 'react-router-dom';
import {MainPage} from './components/pages/Main';
import {AboutPage} from './components/pages/About';
import './styles/index.scss';

const getLazyComponent = (children: ReactNode): JSX.Element => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      {children}
    </Suspense>
  );
};

export const App = () => {
  return (
    <div className={'app'}>
      <Link to={'/'}>Main</Link>
      <Link to={'/about'}>About</Link>
      <Routes>
        <Route path={'/'} element={getLazyComponent(<MainPage />)} />
        <Route path={'/about'} element={getLazyComponent(<AboutPage />)} />
      </Routes>
    </div>
  );
};