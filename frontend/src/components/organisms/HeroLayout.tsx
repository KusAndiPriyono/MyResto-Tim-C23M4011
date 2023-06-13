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
          backgroundColor: '#588157',
          width: 'calc(100% - 200px)',
          margin: '0px 200px',
          height: '329px',
          borderRadius: '40px 0px 0px 0px',
          '@media (max-width: 900px)': {
            width: 'calc(100% - 200px)',
            margin: '0px 200px',
          },
        }}
      >
        <Typography
          variant='body2'
          sx={{
            color: '#FFFFFF',
            width: '610px',
            height: '229px',
            fontSize: '18px',
            gridArea: 'sidebar',
            margin: '30px 30px 30px 30px',
          }}
        >
          Aplikasi My Resto adalah sebuah platform yang dirancang untuk membantu
          pengguna dalam mencari dan menemukan tempat restoran. Yuk segera cari
          restaurant favoritmu!!!
          <Button
            type='submit'
            size='large'
            onClick={() => {
              navigate('/auth/login', { replace: true });
            }}
            sx={{
              color: '#000000',
              backgroundColor: '#FFFFFF',
              marginTop: 7,
              marginLeft: 40,
              width: 208,
              height: 60,
              borderRadius: 2,
              gridArea: 'sidebar',
              '&:hover': {
                backgroundColor: '#c2c0c0',
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
        }}
      />
    </Container>
  );
}

export default HeroLayout;

{
  /* <Box
      sx={{
        marginBottom: '30px',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
      }}
    >
      <Box
        sx={{
          backgroundColor: '#3A5A40',
          width: '840px',
          height: '329px',
          borderRadius: '40px 0px 0px 0px',
          gridArea: 'sidebar',
          marginRight: '30px',
          display: 'grid',
          flexGrow: 1,
          overflow: 'hidden',
          px: 3,
          gridTemplateColumns: 'repeat(4, 1fr)',
          '@media (max-width: 900px)': {
            width: '540px',
            height: '229px',
          },
        }}
      >
        <Typography
          variant='body2'
          sx={{
            color: '#FFFFFF',
            width: '610px',
            height: '229px',
            fontSize: '18px',
            gridArea: 'sidebar',
            margin: '30px 30px 30px 30px',
          }}
        >
          Aplikasi My Resto adalah sebuah platform yang dirancang untuk membantu
          pengguna dalam mencari dan menemukan tempat restoran. Yuk segera cari
          restaurant favoritmu!!!
          <Button
            type='submit'
            size='large'
            onClick={() => {
              navigate('/auth/login', { replace: true });
            }}
            sx={{
              color: '#000000',
              backgroundColor: '#FFFFFF',
              marginTop: 7,
              marginLeft: 40,
              width: 208,
              height: 60,
              borderRadius: 2,
              gridArea: 'sidebar',
              '&:hover': {
                backgroundColor: '#c2c0c0',
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
          borderRadius: '310px',
          gridArea: 'sidebar',
          margin: '120px 0px 0px -150px',
          '@media (max-width: 900px)': {
            width: 0,
            height: 0,
          },
        }}
      />
      <CardMedia
        component='img'
        image='https://www.themealdb.com/images/media/meals/wuvryu1468232995.jpg'
        sx={{
          width: 220,
          height: 220,
          borderRadius: '110px',
          gridArea: 'sidebar',
          margin: '250px 0px 0px 150px',
          '@media (max-width: 900px)': {
            width: 0,
            height: 0,
          },
        }}
      />
    </Box> */
}
