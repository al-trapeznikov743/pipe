import {Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import {routeConfig} from '../lib/routeConfig';
// import {PageLoader} from 'widgets/PageLoader';

const AppRouter = () => (
  <Routes>
    {Object.values(routeConfig).map(({path, element}) => (
      <Route
        key={path}
        path={path}
        element={(
          <Suspense fallback={'PageLoader'}>
            {element}
          </Suspense>
        )}
      />
    ))}
  </Routes>
);

export default AppRouter;