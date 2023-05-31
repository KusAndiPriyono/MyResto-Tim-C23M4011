/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Container } from '@mui/material';
import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import React from 'react';
import Token from 'api/token';
import Header from 'components/organisms/Header';

const AuthLayout: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = Token.getToken();
    if (token) {
      navigate('/', { replace: true });
    }
  }, []);

  return (
    <Box
      sx={{
        minHeight: '100%',
        width: '100%',
        padding: '20px',
        '@media (min-width: 640px)': {
          padding: '28px',
        },
        '@media (min-width: 960px)': {
          padding: '32px',
        },
      }}
    >
      <Container>
        <Header isAuthenticated={false} />
        <main>
          <Outlet />
        </main>
      </Container>
    </Box>
  );
};

export default AuthLayout;
