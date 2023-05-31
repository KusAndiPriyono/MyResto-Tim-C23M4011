import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <Box
      component='main'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        gap: '16px',
      }}
    >
      <Box
        component='figure'
        sx={{
          width: '100%',
          maxWidth: '425px',
        }}
      >
        <img src='/images/404.png' alt='404 illustration' width={500} />
      </Box>
      <Link to='/'>
        <Button>Kembali ke Beranda</Button>
      </Link>
    </Box>
  );
};

export default PageNotFound;
