/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Container } from '@mui/material';
import Header from '../organisms/header';
import { Outlet, useNavigate } from 'react-router-dom';
// import Token from '../../api/token';
// import { useEffect } from 'react';

const AuthLayout = () => {
  // const navigate = useNavigate();
  // useEffect(() => {
  //   const token = Token.getToken();
  //   if (token) {
  //     navigate('/', { replace: true });
  //   }
  // }, []);
  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100vw',
        padding: '20px',
        '@media (min-width: 640px)': {
          padding: '28px',
        },
        '@media (min-width: 960px)': {
          padding: '32px',
        },
      }}
    >
      <Container
        size={'md'}
        p={0}
        sx={{
          position: 'relative',
        }}
      >
        <Header />
        <main>
          <Outlet />
        </main>
      </Container>
    </Box>
  );
};

export default AuthLayout;
