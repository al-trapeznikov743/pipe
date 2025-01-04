import {useTheme} from './providers/ThemeProvider';
import {RouteProvider} from './providers/RouteProvider'
import AppNavigation from '@/features/AppNavigation';
import './styles/index.scss';

export const App = () => {
  const {theme} = useTheme();

  return (
    <div className={`app ${theme}`}>
      <AppNavigation />
      <RouteProvider />
    </div>
  );
};