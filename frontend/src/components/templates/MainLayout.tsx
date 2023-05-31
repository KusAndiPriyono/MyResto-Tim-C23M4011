import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Box, Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import UserApi from 'api/services/user';
import Header from 'components/organisms/Header';

const MainLayout: React.FC = () => {
  const { data, isSuccess } = useQuery(['User'], UserApi.getAuthenticatedUser);

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
      <Container
        sx={{
          position: 'relative',
        }}
      >
        {isSuccess && (
          <>
            <Header isAuthenticated={true} username={data.name} />
            <main>
              <Outlet />
            </main>
          </>
        )}
      </Container>
    </Box>
  );
};

export default MainLayout;
