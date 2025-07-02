import { AppRoutes, NestedRoutes } from '@/shared/const/router';
import { AppRoutesProps } from '@/shared/types/router';
import { MainPage } from '@/pages/MainPage';

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.SINGLE_PAGE]: {
    path: '/',
    index: true,
    element: <div>Single Page</div>,
  },
  [AppRoutes.MAIN_PAGE]: {
    path: 'main',
    authOnly: false,
    element: <MainPage />,
    nestedRoutes: {
      [NestedRoutes.NESTED_PAGE]: {
        path: 'nested',
        authOnly: false,
        element: <div>Nested Page</div>,
      },
    },
  },
  [AppRoutes.NOT_FOUND]: {
    path: '*',
    element: <div>Not Found</div>,
  },
};
