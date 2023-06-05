import { useState, useEffect } from 'react';
import axios from 'axios';

import * as API from 'api/services';

import {
  Box,
  Container,
  Grid,
  Skeleton,
  Typography,
  CardMedia,
  CardContent,
} from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import RestaurantApi from 'api/services/restaurant';

interface Props {
  loading?: boolean;
  // allRestaurantsLength: number;
  // booking: boolean;
}

function RestaurantList(props: Props) {
  const { loading = false } = props;

  const [data, setData] = useState(['Restaurants']);

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
  }, []);

  return (
    <Grid container wrap='wrap' spacing={2}>
      {(loading ? Array.from(new Array(3)) : data).map((data, index) => (
        <Box key={index} sx={{ width: 210, marginRight: 0.5, my: 5 }}>
          {data ? (
            <CardMedia component='img' height='200' image={data.imageCover} />
          ) : (
            <Skeleton variant='rectangular' width={210} height={118} />
          )}
          {data ? (
            <Box>
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  {data.name}
                </Typography>
              </CardContent>

              <CardContent>
                <Typography variant='body2' color='text.secondary'>
                  {data.difficulty}
                </Typography>

                <Typography variant='body2' color='text.secondary'>
                  {data.duration}
                </Typography>

                <Typography variant='body2' color='text.secondary'>
                  {data.summary}
                </Typography>

                {/* <Typography variant='body2' color='text.secondary'>
                  {data.startLocation}
                </Typography> */}

                <Typography variant='body2' color='text.secondary'>
                  {data.maxCapacity}
                </Typography>
              </CardContent>

              <CardContent>
                <Typography variant='body2' color='text.secondary'>
                  {data.price}
                </Typography>

                <Typography variant='body2' color='text.secondary'>
                  {data.ratingsAverage}
                </Typography>

                <Typography variant='body2' color='text.secondary'>
                  {data.ratingsQuantity}
                </Typography>
              </CardContent>
            </Box>
          ) : (
            <Box sx={{ pt: 0.5 }}>
              <Skeleton />
              <Skeleton width='100%' />
            </Box>
          )}
        </Box>
      ))}
    </Grid>
  );
}

export default RestaurantList;
