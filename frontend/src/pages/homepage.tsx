/* eslint-disable react-hooks/exhaustive-deps */

import { Container } from '@mui/material';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import RestaurantApi from 'api/services/restaurant';
// import RestaurantCard from 'components/molecules/RestaurantCard';
import RestaurantList from 'components/templates/RestaurantList';

const HomePage = () => {
  const navigate = useNavigate();

  const { data } = useQuery(['Restaurants'], RestaurantApi.getAllRestaurants);

  return (
    <>
      <RestaurantList />
    </>
  );
};

export default HomePage;

// import {
//   Box,
//   Grid,
//   Skeleton,
//   Typography,
//   CardMedia,
//   CardContent,
// } from '@mui/material';
// import { useQuery } from '@tanstack/react-query';
// import RestaurantApi from 'api/services/restaurant';

// interface Props {
//   loading: boolean;
// }

// function HomePage(props: Props) {
//   const { loading = false } = props;

//   const { data } = useQuery(['Restaurants'], RestaurantApi.getAllRestaurants);
//   console.log(data);
//   return;

//   // return (
//   //   <Grid container wrap='wrap' spacing={2}>
//   //     {(loading ? Array.from(new Array(3)) : restaurant).map(
//   //       (restaurant: any, index: number) => (
//   //         <Box key={index} sx={{ width: 210, marginRight: 0.5, my: 5 }}>
//   //           {restaurant ? (
//   //             <CardMedia
//   //               component='img'
//   //               alt='green iguana'
//   //               height='200'
//   //               image={restaurant}
//   //             />
//   //           ) : (
//   //             <Skeleton variant='rectangular' width={210} height={118} />
//   //           )}
//   //           {restaurant ? (
//   //             <Box>
//   //               <CardContent>
//   //                 <Typography gutterBottom variant='h5' component='div'>
//   //                   {restaurant.name}
//   //                 </Typography>
//   //               </CardContent>

//   //               <CardContent>
//   //                 <Typography variant='body2' color='text.secondary'>
//   //                   {restaurant.difficulty}
//   //                 </Typography>

//   //                 <Typography variant='body2' color='text.secondary'>
//   //                   {restaurant.duration}
//   //                 </Typography>

//   //                 <Typography variant='body2' color='text.secondary'>
//   //                   {restaurant.summary}
//   //                 </Typography>

//   //                 <Typography variant='body2' color='text.secondary'>
//   //                   {restaurant.startLocation.description}
//   //                 </Typography>

//   //                 <Typography variant='body2' color='text.secondary'>
//   //                   {restaurant.maxCapacity}
//   //                 </Typography>
//   //               </CardContent>

//   //               <CardContent>
//   //                 <Typography variant='body2' color='text.secondary'>
//   //                   {restaurant.price}
//   //                 </Typography>

//   //                 <Typography variant='body2' color='text.secondary'>
//   //                   {restaurant.ratingsAverage}
//   //                 </Typography>

//   //                 <Typography variant='body2' color='text.secondary'>
//   //                   {restaurant.ratingsQuantity}
//   //                 </Typography>
//   //               </CardContent>
//   //             </Box>
//   //           ) : (
//   //             <Box sx={{ pt: 0.5 }}>
//   //               <Skeleton />
//   //               <Skeleton width='60%' />
//   //             </Box>
//   //           )}
//   //         </Box>
//   //       )
//   //     )}
//   //   </Grid>
//   // );
// }

// export default HomePage;
