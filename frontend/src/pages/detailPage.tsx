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

export default function DetailPage() {
  const navigate = useNavigate();
  const value = 5;

  return (
    <Card sx={{ maxWidth: 1200 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
            F
          </Avatar>
        }
        action={
          <IconButton aria-label='settings'>
            <MoreVertIcon />
          </IconButton>
        }
        // Location
        title='Fish pie enak'
        subheader='wonokromo, Surabaya, Jawa Timur'
      />
      <CardMedia
        component='img'
        height='450'
        image='/images/404.png'
        alt='Paella dish'
      />
      <CardContent>
        {/* Rating */}
        <Box
          sx={{
            width: 200,
            display: 'flex',
            alignItems: 'center',
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
      <CardContent>
        <Typography paragraph>Description</Typography>
        <Typography paragraph>
          Fish pie adalah hidangan klasik yang terdiri dari potongan ikan yang
          dicampur dengan sayuran dan saus krim, lalu ditutupi dengan lapisan
          adonan kentang atau adonan puff pastry, kemudian dipanggang hingga
          kecokelatan. Hidangan ini memberikan perpaduan sempurna antara
          kelezatan ikan yang lembut, rasa kaya dari saus krim, dan tekstur
          lezat dari adonan kentang atau puff pastry yang garing. Fish pie
          adalah hidangan yang populer di banyak negara, terutama di Inggris dan
          Skotlandia, dan sering disajikan sebagai hidangan utama dalam acara
          makan malam keluarga.", "summary": "restaurant ini menyediakan makanan
          yang lezat dan sehat
        </Typography>
        <Typography paragraph>
          Add rice and stir very gently to distribute. Top with artichokes and
          peppers, and cook without stirring, until most of the liquid is
          absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved
          shrimp and mussels, tucking them down into the rice, and cook again
          without stirring, until mussels have opened and rice is just tender, 5
          to 7 minutes more. (Discard any mussels that don&apos;t open.)
        </Typography>
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
