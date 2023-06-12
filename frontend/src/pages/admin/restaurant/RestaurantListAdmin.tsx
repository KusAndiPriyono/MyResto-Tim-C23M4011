import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useState, useEffect } from 'react';
import * as API from 'api/services';
import { Link } from 'react-router-dom';
import {
  Skeleton,
  CardMedia,
  CardContent,
  Card,
  Rating,
  Button,
} from '@mui/material';
import NavDashboard from '../nav/NavDashboard';

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

interface Props {
  loading?: boolean;
  // allRestaurantsLength: number;
  // booking: boolean;
}

export default function RestaurantListAdmin(props: Props) {
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
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <NavDashboard/>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Button
              variant='contained'
              // component={Link}
              // to={`/addrestaurant`}
              sx={{ backgroundColor:'#0079db',}}
              >
              ADD RRSTAURANTS
            </Button>
            <Grid container wrap='wrap' spacing={2} justifyContent='center'>
            {(loading ? Array.from(new Array(3)) : data).map((data, index) => (
              <Card
                key={index}
                sx={{
                  width: 230,
                  marginRight: 1,
                  marginLeft: 1,
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
                    <CardContent>
                    <Button
                        variant='contained'
                        // component={Link}
                        // to={`/detail/${data._id}`}
                        sx={{ backgroundColor:'#007c17',}}
                      >
                        Edit
                      </Button>
                      <Button
                        variant='contained'
                        component={Link}
                        to={"*"}
                        sx={{ margin:2 ,backgroundColor:'#c50000',}}
                      >
                        Delete
                      </Button>
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
        </Box>
      </Box>
    </ThemeProvider>
  );
}
