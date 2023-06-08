import { Navigate, useRoutes } from 'react-router-dom';
import LoginPage from 'pages/login';
import SignupPage from 'pages/signup';
import PageNotFound from 'pages/404';
import MainLayout from 'components/templates/MainLayout';
import AuthLayout from 'components/templates/AuthLayout';
import HomePage from 'pages/homepage';
import AccountPage from 'pages/accountPage';
import DetailPage from 'pages/detailPage';
import Dashboard from 'pages/dashboard';
import BookingPage from 'pages/bookingPage';

const Routes = () => {
  return useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
        {
          path: `/detail/:id`,
          element: <DetailPage />,
        },
        {
          path: 'booking',
          element: <BookingPage />,
        },
        {
          path: 'Account',
          element: <AccountPage />,
        },
        {
          path: 'dashboard',
          element: <Dashboard />,
        },
        {
          path: '*',
          element: <Navigate replace to='/404' />,
        },
      ],
    },
    {
      path: '/auth',
      element: <AuthLayout />,
      children: [
        {
          path: 'login',
          element: <LoginPage />,
        },
        {
          path: 'signup',
          element: <SignupPage />,
        },
        {
          path: '',
          element: <Navigate replace to='/404' />,
        },
        {
          path: '*',
          element: <Navigate replace to='/404' />,
        },
      ],
    },
    {
      path: '*',
      element: <Navigate replace to='404' />,
    },
    {
      path: '404',
      element: <PageNotFound />,
    },
  ]);
};

export default Routes;
