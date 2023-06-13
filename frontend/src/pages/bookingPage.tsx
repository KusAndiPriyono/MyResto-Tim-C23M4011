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
  Card,
  Rating,
  Button,
} from '@mui/material';
import { Link } from 'react-router-dom';

interface Props {
  loading?: boolean;
  // allRestaurantsLength: number;
  // booking: boolean;
}

export default function BookingPage(props: Props) {
  const { loading = false } = props;
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await API.DataGet('bookings/my-restaurants');
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
        Booking History
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
      ></Typography>
      <Grid
        container
        wrap='wrap'
        gridColumn={2}
        spacing={2}
        justifyContent='center'
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {(loading ? Array.from(new Array(3)) : data).map((data, index) => (
          <Grid
            key={index}
            md={12}
            xl={12}
            item
            sx={{
              width: '100%',
              // backgroundColor: '#FFFFFF',
              // borderRadius: '30px 30px 5px 5px ',
              // boxShadow: '5px 3px 10px 0px rgba(0, 0, 0, 0.25)',
            }}
          >
            <Card
              sx={{
                width: '100%',
                display: 'flex',
                '@media screen and (max-width: 850px)': {
                  flexDirection: 'column',
                },
                backgroundColor: '#FFFFFF',
                // borderRadius: '30px 30px 5px 5px ',
                boxShadow: '5px 3px 10px 0px rgba(0, 0, 0, 0.25)',
              }}
            >
              {data ? (
                <CardMedia
                  component='img'
                  image={data.restaurant  .imageCover}
                  sx={{
                    width: '200px',
                    '@media screen and (max-width: 850px)': {
                      width: '100%',
                    },
                    // margin: '10px 10px 0px 10px',
                    // borderRadius: '30px 30px 0px 0px ',
                  }}
                />
              ) : (
                <Skeleton variant='rectangular' width={210} height={118} />
              )}

              {data ? (
                <Box sx={{ 
                  display: 'flex', 
                  flexDirection: 'row',
                  '@media screen and (max-width: 850px)': {
                    flexDirection: 'column'
                  },
                   }}>
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
                        {data.restaurant.name}
                      </Typography>
                      <Typography
                        variant='body2'
                        color='#000000'
                        sx={{
                          display: 'flex',
                        }}
                      >
                        {data.restaurant.ratingsAverage}
                        &nbsp;
                        <Rating
                          size='small'
                          name='half-rating-read'
                          value={data.restaurant.ratingsAverage}
                          precision={0.1}
                          readOnly
                        />
                        &nbsp; ({data.restaurant.ratingsQuantity})
                      </Typography>
                    </CardContent>

                    <CardContent sx={{ marginBottom: '0px' }}>
                      <Typography
                        variant='body2'
                        color='#000000'
                        sx={{ textAlign: 'justify' }}
                      >
                        {data && data.restaurant.description
                          ? data.restaurant.description.slice(0, 100)
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
                  </Box>

                  <Box sx={{
                    display: 'flex',
                    alignItems:  'end',
                    gap: '10px',
                    padding: '10px'
                  }}>
                    <Button
                      variant='contained'
                      size='large'
                      color='error'
                      component={Link}
                      to={`/detail/${data._id}`}
                      className='detail-button'
                    >
                      DELETE
                    </Button>

                    <Typography
                      variant='body2'
                      color='#00aa17'
                      sx={{ textAlign: 'right',  padding: "10px" }}
                    >
                      Rp.{data.price}
                    </Typography>
                  </Box>
                </Box>
              ) : (
                <Box sx={{ pt: 0.5 }}>
                  <Skeleton />
                  <Skeleton width='100%' />
                </Box>
              )}
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}



// import {
//   Box,
//   Button,
//   Card,
//   CardContent,
//   CardMedia,
//   Container,
//   Grid,
//   Rating,
//   Skeleton,
//   Typography,
// } from '@mui/material';
// import * as API from 'api/services';
// import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

// interface Props {
//   loading?: boolean;
//   // allRestaurantsLength: number;
//   // booking: boolean;
// }

// export default function BookingPage(props: Props) {
//   const { loading = false } = props;
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       const response = await API.DataGet('bookings/my-restaurants');
//       if (response.status === 200) {
//         setData(response.data);
//       } else {
//         setData([]);
//       }
//     }

//     fetchData();

//     return () => {
//       setData([]);
//     };
//   }, []);

//   return (
//     <Container
//       sx={{
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//       }}
//     >
//       <Typography
//         variant='h2'
//         sx={{
//           color: '#000000',
//           fontWeight: 'bold',
//           marginBottom: '10px',
//           '@media (max-width: 768px)': {
//             fontSize: '40px',
//             alignItems: 'center',
//           },
//         }}
//       >
//         My Booking Restaurant
//       </Typography>
//       <Typography
//         variant='h6'
//         sx={{
//           color: '#000000',
//           '@media (max-width: 768px)': {
//             fontSize: '14px',
//             alignItems: 'center',
//           },
//         }}
//       >
//         Find the restaurant you like and then make a reservation.
//       </Typography>
//       <Grid container wrap='wrap' spacing={2} justifyContent='center'>
//         {(loading ? Array.from(new Array(3)) : data).map((data, index) => (
//           <Card
//             key={index}
//             sx={{
//               width: 230,
//               marginRight: 3,
//               marginLeft: 3,
//               my: 8,
//               backgroundColor: '#FFFFFF',
//               borderRadius: '30px 30px 5px 5px ',
//               boxShadow: '5px 3px 10px 0px rgba(0, 0, 0, 0.25)',
//             }}
//           >
//             {data ? (
//               <CardMedia
//                 component='img'
//                 image={data.restaurant.imageCover}
//                 sx={{
//                   width: 210,
//                   height: 200,
//                   margin: '10px 10px 0px 10px',
//                   borderRadius: '30px 30px 0px 0px ',
//                 }}
//               />
//             ) : (
//               <Skeleton variant='rectangular' width={210} height={118} />
//             )}

//             {data ? (
//               <Box>
//                 <CardContent sx={{ marginBottom: '0px' }}>
//                   <Typography
//                     gutterBottom
//                     variant='h5'
//                     component='div'
//                     sx={{
//                       fontSize: '18px',
//                       fontWeight: 'bold',
//                     }}
//                   >
//                     {data.restaurant.name}
//                   </Typography>
//                   <Typography
//                     variant='body2'
//                     color='#000000'
//                     sx={{
//                       display: 'flex',
//                     }}
//                   >
//                     {data.restaurant.ratingsAverage}
//                     &nbsp;
//                     <Rating
//                       size='small'
//                       name='half-rating-read'
//                       value={data.restaurant.ratingsAverage}
//                       precision={0.1}
//                       readOnly
//                     />
//                     &nbsp; ({data.restaurant.ratingsQuantity})
//                   </Typography>
//                 </CardContent>

//                 <CardContent sx={{ marginBottom: '0px', marginTop: '-10px' }}>
//                   <Typography
//                     variant='body2'
//                     color='#000000'
//                     sx={{ textAlign: 'justify' }}
//                   >
//                     {data && data.restaurant.description
//                       ? data.restaurant.description.slice(0, 100)
//                       : ''}
//                     ...
//                   </Typography>
//                   <Typography variant='body2' color='text.secondary'>
//                     Location : {data.Locations}
//                   </Typography>
//                   <Typography variant='body2'>
//                     Capacity : {data.maxCapacity}
//                   </Typography>
//                 </CardContent>

//                 <CardContent>
//                   <Button
//                     variant='contained'
//                     size='large'
//                     component={Link}
//                     to={`/detail/${data._id}`}
//                     className='detail-button'
//                   >
//                     Detail
//                   </Button>

//                   <Typography
//                     variant='body2'
//                     color='#00aa17'
//                     sx={{ textAlign: 'right' }}
//                   >
//                     Usd.{data.price}
//                   </Typography>
//                 </CardContent>
//               </Box>
//             ) : (
//               <Box sx={{ pt: 0.5 }}>
//                 <Skeleton />
//                 <Skeleton width='100%' />
//               </Box>
//             )}
//           </Card>
//         ))}
//       </Grid>
//     </Container>
//   );
// }
