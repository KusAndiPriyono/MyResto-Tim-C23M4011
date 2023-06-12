import { Box, Typography, CardMedia, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function HeroLayout() {
  const navigate = useNavigate();

  return (
    <Box
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
              navigate('/homepage', { replace: true });
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
            Reservation
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
    </Box>
  );
}

export default HeroLayout;
