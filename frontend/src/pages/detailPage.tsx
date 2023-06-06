import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import { padding } from '@mui/system';

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

const imageData = [
  { id: 1, image: '/images/404.png', alt: 'Image 1' },
  { id: 2, image: '/images/404.png', alt: 'Image 2' },
  { id: 3, image: '/images/404.png', alt: 'Image 3' },
];

export default function DetailPage() {
  const navigate = useNavigate();
  const value = 5;

  return (
    <Card
      sx={{
        maxWidth: 1200,
        backgroundColor: '#F9F5EB',
        fontFamily: 'Roboto',
      }}
    >
      <CardMedia
        component='img'
        height='450'
        image='/images/404.png'
        alt='Paella dish'
      />
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          padding: 4,
          justifyContent: 'space-between',
          '& .booking-button': {
            marginLeft: 'auto',
          },
          '@media (min-width: 600px)': {
            flexDirection: 'row',
            alignItems: 'center',
          },
        }}
      >
        <CardHeader title='Fish pie enak' />
        <Box
          sx={{
            width: 200,
            display: 'flex',
            alignItems: 'center',
            mb: 2,
            '@media (min-width: 600px)': {
              mb: 0,
            },
          }}
        >
          <Rating
            name='text-feedback'
            value={value}
            readOnly
            precision={0.5}
            emptyIcon={
              <StarIcon style={{ opacity: 0.55 }} fontSize='inherit' />
            }
          />
          <Box sx={{ ml: 2 }}>{labels[value]}</Box>
        </Box>
      </CardContent>

      {/* Description */}
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: 'center',
          justifyContent: { xs: 'flex-start', sm: 'space-between' },
          padding: 4,
          '@media screen and (max-width: 850px)': {
            flexDirection: 'column',
            '& > *:not(:last-child)': {
              marginBottom: '20px',
            },
          },
        }}
      >
        <Typography paragraph>
          Fish pie adalah hidangan klasik yang terdiri dari potongan ikan yang
          dicampur dengan sayuran dan saus krim, lalu ditutupi dengan lapisan
          adonan kentang atau adonan puff pastry, kemudian dipanggang hingga
          kecokelatan. Hidangan ini memberikan perpaduan sempurna antara
          kelezatan ikan yang lembut, rasa kaya dari saus krim, dan tekstur
          lezat dari adonan kentang atau puff pastry yang garing. Fish pie
          adalah hidangan yang populer di banyak negara, terutama di Inggris dan
          Skotlandia, dan sering disajikan sebagai hidangan utama dalam acara
          makan malam keluarga.
        </Typography>
        <CardMedia
          component='img'
          height='349'
          image='/images/404.png'
          alt='Paella dish'
        />
      </CardContent>
      <CardContent
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px',
          padding: '20px',
        }}
      >
        {imageData.map((item) => (
          <CardMedia
            key={item.id}
            component='img'
            height='349'
            image={item.image}
            alt={item.alt}
          />
        ))}
      </CardContent>

      <CardActions
        disableSpacing
        sx={{
          display: 'flex',
          padding: 2,
          justifyContent: 'space-between',
          '& .booking-button': {
            marginLeft: 'auto',
          },
        }}
      >
        <IconButton aria-label='add to favorites'>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label='share'>
          <ShareIcon />
        </IconButton>
        <Button
          variant='contained'
          size='large'
          onClick={() => {
            navigate('/booking', { replace: true });
          }}
          className='booking-button'
        >
          Booking
        </Button>
      </CardActions>
    </Card>
  );
}
