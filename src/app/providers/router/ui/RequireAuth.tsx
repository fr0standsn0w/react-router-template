import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { getAuthRoute } from '@/shared/const/router';

interface RequireAuthProps {
  children: ReactNode;
}

export function RequireAuth({ children }: RequireAuthProps) {
  const location = useLocation();
  const hasAccessToken = true;

  if (!hasAccessToken) {
    return <Navigate to={getAuthRoute()} state={{ from: location }} replace />;
  }

  return children;
}
