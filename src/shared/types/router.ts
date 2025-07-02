import { RouteProps } from 'react-router-dom';

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
  redirectFrom?: string;
  nestedRoutes?: Record<string, AppRoutesProps>;
};
