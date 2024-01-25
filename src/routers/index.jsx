import { lazy, Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import { Skeleton } from 'antd';

const lazyComponent = (Component) => {
  return (
    <Suspense fallback={<Skeleton />}>
      <Component />
    </Suspense>
  );
};

const Welcome = lazy(() => import('../pages/home/welcome'));
const User = lazy(() => import('../pages/user/user'));
const Login = lazy(() => import('../pages/user/login'));

const RouterComponents = () =>
  useRoutes([
    {
      path: '/',
      element: lazyComponent(Welcome),
      children: [
        {
          path: 'login',
          element: lazyComponent(Login),
        },
        {
          path: 'home',
          element: lazyComponent(Welcome),
          children: [
            {
              path: 'welcome',
              element: Welcome,
            },
          ],
        },
        {
          path: 'applicatin',
          element: lazyComponent(Welcome),
        },
        {
          path: 'asset',
          element: lazyComponent(Welcome),
        },
        {
          path: 'idc',
          element: lazyComponent(Welcome),
        },
        {
          path: 'network',
          element: lazyComponent(Welcome),
        },
        {
          path: 'audit',
          element: lazyComponent(Welcome),
        },
        {
          path: 'settings',
          element: lazyComponent(Welcome),
        },
        {
          path: 'user',
          element: lazyComponent(User),
        },
      ],
    },
  ]);

export default RouterComponents;
