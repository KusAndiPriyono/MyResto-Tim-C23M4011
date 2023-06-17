import {
  Box,
  Typography,
  CardMedia,
  Button,
  Container,
  Grid,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

function HeroLayout() {
  const navigate = useNavigate();

  return (
    <Container fixed>
      <Box
        sx={{
          backgroundColor: '#152A38',
          width: 'calc(100% - 200px)',
          margin: '0px 200px',
          height: '329px',
          borderRadius: '40px 0px 0px 0px',
          '@media (max-width: 900px)': {
            width: 'calc(100% - 20px)',
            margin: '0px 90px',
          },
          '@media (max-width: 650px)': {
            width: 'calc(100% - 90px)',
            margin: '0px 90px',
          },
          '@media (max-width: 500px)': {
            display: 'none',
          },
        }}
      >
        <Typography
          variant='body2'
          sx={{
            color: '#FFFFFF',
            width: '610px',
            height: '229px',
            fontSize: '22px',
            fontFamily: 'Poppins, sans-serif',
            gridArea: 'sidebar',
            margin: '30px 30px 30px 30px',
            marginLeft: '250px',
            paddingTop: '100px',
            '@media (max-width: 1200px)': {
              width: 'calc(100% - 200px)',
              margin: '0px 200px',
            },
            '@media (max-width: 930px)': {
              width: 'calc(100% - 200px)',
              margin: '0px 170px',
              paddingTop: '50px',
            },
            '@media (max-width: 650px)': {
              width: 'calc(100% - 90px)',
              margin: '0px 90px',
            },
          }}
        >
          This platform is designed to make it easier for you to find a
          restaurant you like. Let's find your favorite restaurant!!
          <Button
            type='submit'
            size='large'
            onClick={() => {
              navigate('/auth/login', { replace: true });
            }}
            sx={{
              color: '#000000',
              backgroundColor: '#FFCC1D',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: '600',
              marginTop: 7,
              marginLeft: 50,
              width: 208,
              height: 60,
              borderRadius: 2,
              gridArea: 'sidebar',
              '&:hover': {
                backgroundColor: '#FFFFFF',
              },
              '@media (max-width: 1250px)': {
                width: 'calc(40 - 200px)',
                margin: '0px 30px',
                mt: 3,
              },
              '@media (max-width: 1025px)': {
                width: 'calc(40 - 200px)',
                margin: '0px 200px',
                mt: 3,
              },
              '@media (max-width: 990px)': {
                width: 'calc(20 - 200px)',
                margin: '0px 100px',
                mt: 2,
              },
              '@media (max-width: 900px)': {
                width: 'calc(20 - 200px)',
                margin: '0px 100px',
                mt: 2,
              },
              '@media (max-width: 650px)': {
                width: 'calc(100% - 100px)',
                margin: '0px 50px',
                mt: 2,
              },
            }}
          >
            Get Started
          </Button>
        </Typography>
      </Box>
      <CardMedia
        component='img'
        image='https://www.themealdb.com/images/media/meals/1548772327.jpg'
        sx={{
          width: 350,
          height: 350,
          borderRadius: '50%',
          marginLeft: '60px',
          marginTop: '-200px',
          position: 'absolute',
          '@media (max-width: 1200px)': {
            width: 250,
            height: 250,
          },
          '@media (max-width: 900px)': {
            width: 200,
            height: 200,
            marginLeft: '10px',
            marginTop: '-150px',
          },
          '@media (max-width: 500px)': {
            display: 'none',
          },
        }}
      />
      <CardMedia
        component='img'
        image='https://www.themealdb.com/images/media/meals/wuvryu1468232995.jpg'
        sx={{
          width: 200,
          height: 200,
          borderRadius: '50%',
          marginLeft: '350px',
          marginTop: '-50px',
          position: 'absolute',
          '@media (max-width: 1200px)': {
            width: 150,
            height: 150,
            marginLeft: '250px',
          },
          '@media (max-width: 900px)': {
            width: 100,
            height: 100,
            marginLeft: '150px',
            marginTop: '-50px',
          },
          '@media (max-width: 500px)': {
            display: 'none',
          },
        }}
      />
    </Container>
  );
}

export default HeroLayout;
