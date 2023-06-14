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

interface Props {
  loading?: boolean;
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
        mt: 25,
        '@media (max-width: 1200px)': {
          mt: 15,
        },
      }}
    >
      <Typography
        variant='h2'
        sx={{
          color: '#152A38',
          fontWeight: 'bold',
          my: 3,
          textAlign: 'center',
          '@media (max-width: 1000px)': {
            mt: 20,
          },
          '@media (max-width: 900px)': {
            mt: 2,
          },
        }}
      >
        Restaurants
      </Typography>
      <Typography variant='h6' sx={{ my: 3, textAlign: 'center',  color: '#152A38' }}>
        Find the restaurant you like and then make a reservation.
      </Typography>
      <Grid container spacing={3}>
        {(loading ? Array.from(new Array(3)) : data).map((data, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                height: '100%',
                borderRadius: '30px 30px 0 0',
                boxShadow: 1,
                backgroundColor: '#152A38',
                color: '#fff',
              }}
            >
              {data ? (
                <CardMedia
                  component='img'
                  image={data.imageCover}
                  alt={data.name}
                  sx={{ height: 200, borderRadius: '30px 30px 0 0' }}
                />
              ) : (
                <Skeleton variant='rectangular' width={210} height={118} />
              )}
              {data ? (
                <CardContent>
                  <Typography
                    variant='h5'
                    component='div'
                    sx={{ fontWeight: 'bold' }}
                  >
                    {data.name}
                  </Typography>
                  <Typography variant='body2' sx={{ display: 'flex' }}>
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
                  <Typography sx={{ mt: 2 }} variant='body2'>
                    {data?.description?.slice(0, 100) || ''}
                    ...
                  </Typography>
                  <Typography variant='body2' sx={{ mt: 2 }}>
                    Location: {data.startLocation.address}
                  </Typography>
                  <Typography variant='body2'>
                    Capacity: {data.maxCapacity}
                  </Typography>
                  <Typography
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      mt: 2,
                    }}
                  >
                    <Button
                      variant='contained'
                      size='large'
                      component={Link}
                      to={`/detail/${data._id}`}
                      className='detail-button'
                    >
                      Detail
                    </Button>
                    <Typography variant='body2' color='#00aa17'>
                      $.{data.price}
                    </Typography>
                  </Typography>
                </CardContent>
              ) : (
                <Skeleton variant='rectangular' width={210} height={118} />
              )}
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
export default RestaurantList;
