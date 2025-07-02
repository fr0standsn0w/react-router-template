import { AppRoutesProps } from '@/shared/types/router';
import { Fragment, memo, Suspense, useCallback } from 'react';
import { Navigate, Route, Routes, useParams } from 'react-router-dom';
import { routeConfig } from '../config/routeConfig';
import { RequireAuth } from './RequireAuth';

const RedirectWithParams = ({ to }: { to: string }) => {
  const params = useParams();
  const redirectPath = to.replace(':id', params.id || '');

  return <Navigate replace to={redirectPath} />;
};

const AppRouterComponent = () => {
  const renderWithWrapper = useCallback((route: AppRoutesProps) => {
    const fallback = <div>Loading...</div>; // your fallback here
    const element = route.element ? (
      <Suspense fallback={fallback}>{route.element}</Suspense>
    ) : null;

    return (
      <Fragment key={route.path}>
        {route.redirectFrom && (
          <Route
            path={route.redirectFrom}
            element={<RedirectWithParams to={String(route.path)} />}
          />
        )}
        <Route
          path={route.path}
          element={
            route.authOnly ? <RequireAuth>{element}</RequireAuth> : element
          }
        >
          {route.nestedRoutes &&
            Object.values(route.nestedRoutes).map(renderWithWrapper)}
        </Route>
      </Fragment>
    );
  }, []);

  return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
};

export const AppRouter = memo(AppRouterComponent);
