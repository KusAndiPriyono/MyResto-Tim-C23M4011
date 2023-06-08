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
import { Container, padding } from '@mui/system';
import { Skeleton } from '@mui/material';
import { useParams } from 'react-router-dom';

import { useState, useEffect } from 'react';
import * as API from 'api/services';

interface Props {
  loading?: boolean;
  // allRestaurantsLength: number;
  // booking: boolean;
}

function DetailPage(props: Props) {
  const { loading = false } = props;

  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    async function fetchData() {
      const response = await API.DataGet(`restaurants/${id}`);
      if (response.status === 200) {
        setData(response.data);
        console.log(response.data);
      } else {
        setData(null);
      }
    }
    fetchData();
  }, [id]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Card
        sx={{
          maxWidth: 1200,
          backgroundColor: '#fff',
          fontFamily: 'Roboto',
        }}
      >
        {data ? (
          <CardMedia
            component='img'
            image={data.imageCover}
            sx={{
              width: '100%',
              height: 500,
            }}
          />
        ) : (
          <Skeleton variant='rectangular' width={210} height={118} />
        )}
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            padding: 4,
            justifyContent: 'space-between',
            fontSize: '25px',
            fontWeight: 'bold',
            '& .booking-button': {
              marginLeft: 'auto',
            },
            '@media (min-width: 600px)': {
              flexDirection: 'row',
              alignItems: 'center',
            },
          }}
        >
          {data.name}
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
            {data.ratingsAverage}
            &nbsp;
            <Rating
              size='small'
              name='half-rating-read'
              value={data.ratingsAverage}
              precision={0.1}
              readOnly
            />
            &nbsp; ({data.ratingsQuantity})
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
          <Typography paragraph>{data.description}</Typography>
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
          {data.images.map((val: any, key: any) => {
            return (
              <div key={key}>
                <CardMedia
                  component='img'
                  height='349'
                  onError={(error) => {
                    // let src= (error.target.src as  any)
                  }}
                  image={val}
                  alt='Paella dish'
                />
              </div>
            );
          })}
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
    </Container>
  );
}

export default DetailPage;
