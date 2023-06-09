import { useState, useEffect } from 'react';

import * as API from 'api/services';

import {
  Box,
  Container,
  Grid,
  Skeleton,
  Typography,
  CardMedia,
  CardContent,
  Card,
  Rating,
  Button,
} from '@mui/material';
import { Link } from 'react-router-dom';
// import { useQuery } from '@tanstack/react-query';
// import RestaurantApi from 'api/services/restaurant';

interface Props {
  loading?: boolean;
  // allRestaurantsLength: number;
  // booking: boolean;
}

function RestaurantList(props: Props) {
  const { loading = false } = props;

  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await API.DataGet('restaurants');
      if (response.status === 200) {
        setData(response.data);
      } else {
        setData([]);
      }
    }

    fetchData();

    return () => {
      setData([]);
    };
  }, []);

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography
        variant='h2'
        sx={{
          color: '#000000',
          fontWeight: 'bold',
          marginBottom: '10px',
          '@media (max-width: 768px)': {
            fontSize: '40px',
            alignItems: 'center',
          },
        }}
      >
        Restaurants
      </Typography>
      <Typography
        variant='h6'
        sx={{
          color: '#000000',
          '@media (max-width: 768px)': {
            fontSize: '14px',
            alignItems: 'center',
          },
        }}
      >
        Find the restaurant you like and then make a reservation.
      </Typography>
      <Grid container wrap='wrap' spacing={2} justifyContent='center'>
        {(loading ? Array.from(new Array(3)) : data).map((data, index) => (
          <Card
            key={index}
            sx={{
              width: 230,
              marginRight: 3,
              marginLeft: 3,
              my: 8,
              backgroundColor: '#FFFFFF',
              borderRadius: '30px 30px 5px 5px ',
              boxShadow: '5px 3px 10px 0px rgba(0, 0, 0, 0.25)',
            }}
          >
            {data ? (
              <CardMedia
                component='img'
                image={data.imageCover}
                sx={{
                  width: 210,
                  height: 200,
                  margin: '10px 10px 0px 10px',
                  borderRadius: '30px 30px 0px 0px ',
                }}
              />
            ) : (
              <Skeleton variant='rectangular' width={210} height={118} />
            )}

            {data ? (
              <Box>
                <CardContent sx={{ marginBottom: '0px' }}>
                  <Typography
                    gutterBottom
                    variant='h5'
                    component='div'
                    sx={{
                      fontSize: '18px',
                      fontWeight: 'bold',
                    }}
                  >
                    {data.name}
                  </Typography>
                  <Typography
                    variant='body2'
                    color='#000000'
                    sx={{
                      display: 'flex',
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
                  </Typography>
                </CardContent>

                <CardContent sx={{ marginBottom: '0px', marginTop: '-10px' }}>
                  <Typography
                    variant='body2'
                    color='#000000'
                    sx={{ textAlign: 'justify' }}
                  >
                    {data && data.description
                      ? data.description.slice(0, 100)
                      : ''}
                    ...
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    Location : {data.Locations}
                  </Typography>
                  <Typography variant='body2'>
                    Capacity : {data.maxCapacity}
                  </Typography>
                </CardContent>

                <CardContent>
                  <Button
                    variant='contained'
                    size='large'
                    component={Link}
                    to={`/detail/${data._id}`}
                    className='detail-button'
                  >
                    Detail
                  </Button>

                  <Typography
                    variant='body2'
                    color='#00aa17'
                    sx={{ textAlign: 'right' }}
                  >
                    Usd.{data.price}
                  </Typography>
                </CardContent>
              </Box>
            ) : (
              <Box sx={{ pt: 0.5 }}>
                <Skeleton />
                <Skeleton width='100%' />
              </Box>
            )}
          </Card>
        ))}
      </Grid>
    </Container>
  );
}

export default RestaurantList;
