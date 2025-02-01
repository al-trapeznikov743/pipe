import {useDispatch} from 'react-redux';
import {RouteProvider} from './providers/RouteProvider'
import AppNavigation from '@/features/AppNavigation';
import {useEffect} from 'react';
import {userActions} from '@/entities/User';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.initAuth());
  }, [dispatch]);

  return (
    <div className={'app'}>
      <AppNavigation />
      <RouteProvider />
    </div>
  );
};