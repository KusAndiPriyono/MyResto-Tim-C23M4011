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
      <Container
        sx={{
          display: 'flex',
          gap: '20px',
          flexDirection: 'row',
          flexWrap: 'wrap',
          padding: '20px',
        }}
      >
        <Card
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '350px',
            borderTopLeftRadius: '30px',
            borderTopRightRadius: '30px',
          }}
        >
          {/* Kategori Header */}
          <div>
            <CardMedia
              component='img'
              alt='green iguana'
              height='200'
              image='/images/404.png'
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                Name
              </Typography>
            </CardContent>
          </div>

          {/* Kategori Detail */}
          <CardContent>
            <Typography variant='body2' color='text.secondary'>
              Difficulty
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Duration
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Summary
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Start Location Description
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Start Date
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Location Length
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Max Group Size
            </Typography>
          </CardContent>

          {/* Kategori Footer */}
          <CardContent>
            <Typography variant='body2' color='text.secondary'>
              Price
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Rating Average
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Rating Quantity
            </Typography>
          </CardContent>

          <CardActions>
            <Button size='small'>Detail</Button>
          </CardActions>
        </Card>
        <Card
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '350px',
            borderTopLeftRadius: '30px',
            borderTopRightRadius: '30px',
          }}
        >
          {/* Kategori Header */}
          <div>
            <CardMedia
              component='img'
              alt='green iguana'
              height='200'
              image='/images/404.png'
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                Name
              </Typography>
            </CardContent>
          </div>

          {/* Kategori Detail */}
          <CardContent>
            <Typography variant='body2' color='text.secondary'>
              Difficulty
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Duration
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Summary
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Start Location Description
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Start Date
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Location Length
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Max Group Size
            </Typography>
          </CardContent>

          {/* Kategori Footer */}
          <CardContent>
            <Typography variant='body2' color='text.secondary'>
              Price
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Rating Average
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Rating Quantity
            </Typography>
          </CardContent>

          <CardActions>
            <Button size='small'>Detail</Button>
          </CardActions>
        </Card>
        <Card
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '350px',
            borderTopLeftRadius: '30px',
            borderTopRightRadius: '30px',
          }}
        >
          {/* Kategori Header */}
          <div>
            <CardMedia
              component='img'
              alt='green iguana'
              height='200'
              image='/images/404.png'
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                Name
              </Typography>
            </CardContent>
          </div>

          {/* Kategori Detail */}
          <CardContent>
            <Typography variant='body2' color='text.secondary'>
              Difficulty
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Duration
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Summary
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Start Location Description
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Start Date
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Location Length
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Max Group Size
            </Typography>
          </CardContent>

          {/* Kategori Footer */}
          <CardContent>
            <Typography variant='body2' color='text.secondary'>
              Price
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Rating Average
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Rating Quantity
            </Typography>
          </CardContent>

          <CardActions>
            <Button size='small'>Detail</Button>
          </CardActions>
        </Card>
        <Card
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '350px',
            borderTopLeftRadius: '30px',
            borderTopRightRadius: '30px',
          }}
        >
          {/* Kategori Header */}
          <div>
            <CardMedia
              component='img'
              alt='green iguana'
              height='200'
              image='/images/404.png'
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                Name
              </Typography>
            </CardContent>
          </div>

          {/* Kategori Detail */}
          <CardContent>
            <Typography variant='body2' color='text.secondary'>
              Difficulty
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Duration
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Summary
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Start Location Description
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Start Date
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Location Length
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Max Group Size
            </Typography>
          </CardContent>

          {/* Kategori Footer */}
          <CardContent>
            <Typography variant='body2' color='text.secondary'>
              Price
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Rating Average
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Rating Quantity
            </Typography>
          </CardContent>

          <CardActions>
            <Button size='small'>Detail</Button>
          </CardActions>
        </Card>
      </Container>
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
