import { useRoutes } from 'react-router-dom';

const Routes = () => {
  return useRoutes([
    {
      path: '/',
      element: '',
      children: [
        {
          path: '/',
          element: 'HomePage',
        },
        {
          path: 'menu/:id',
          element: 'MenuDetailPage',
        },
        {
          path: 'booking',
          element: 'BookingPage',
        },
        {
          path: 'contact',
          element: 'ContactPage',
        },
        {
          path: '*',
          element: <replace to='/404' />,
        },
      ],
    },
    {
      path: '/auth',
      element: 'authLayout',
      children: [
        {
          path: 'login',
          element: 'LoginPage',
        },
        {
          path: 'register',
          element: 'RegisterPage',
        },
        {
          path: '',
          element: <replace to='/404' />,
        },
        {
          path: '*',
          element: <replace to='/404' />,
        },
      ],
    },
    {
      path: '*',
      element: <replace to='404' />,
    },
    {
      path: '404',
      element: 'PageNotFound',
    },
  ]);
};

export default Routes;
