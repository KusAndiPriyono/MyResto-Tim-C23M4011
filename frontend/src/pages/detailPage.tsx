import * as React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as API from 'api/services';
import {
  Box,
  Grid,
  Typography,
  CardMedia,
  CardContent,
  Button,
  Card,
  Rating,
  TextField,
} from '@mui/material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const DetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState<any>(null);
  // const [value, setValue] = React.useState<number | null>(2);

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
    <Box>
      <Card sx={{ maxWidth: 1200 }}>
      <Box 
        sx={{ 
          bgcolor: "#3A5A40",
          width: '100%',
          height: 80,
          }}>
            <KeyboardBackspaceIcon 
            onClick={() => {
              navigate('/', { replace: true });
            }}
            sx={{ 
              ml: 2,
              color: "#ffffff",
              fontSize: 70,
              cursor: 'pointer',
            }} />
      </Box>
      <CardMedia
        component='img'
        height='450'
        image={data.imageCover}
      />
      <CardContent>
        <Box
          sx={{
            alignItems: 'center',
          }}
        >
          <Typography gutterBottom variant='h2' component='div'
                sx={{ 
                  fontSize: '50px',
                  fontWeight:'bold',
                   }}>
                  {data.name}
          </Typography>
          <Typography variant='body2' color='#000000'
          sx={{ 
                  display: 'flex',
                  fontSize: '18px',
                  fontWeight:'bold',
                   }}> 
                    {data.ratingsAverage}
                   &nbsp;
                  <Rating
                    // size="large"
                    name="half-rating-read"
                    value={data.ratingsAverage}
                    precision={0.1}
                    readOnly
                  />
                  &nbsp;
                  {data.ratingsQuantity}
                </Typography>
        </Box>
      </CardContent>
      <CardContent>
      <Grid container spacing={2}>
        
        <Grid item xs={12} sm container>
        <Typography paragraph
            sx={{ 
          fontSize: '18px',
         }}>
          {data.description}
          </Typography>
        </Grid>
        <Grid item>
        <CardMedia
          component='img'
          height='350'
          width='350'
          image={data.imageCover}
      />
        </Grid>
      </Grid>
      <Grid container spacing={3} justifyContent="center" marginTop={3}>
        
        <Grid item>
        <CardMedia
          component='img'
          image="https://www.themealdb.com/images/media/meals/ysxwuq1487323065.jpg"
          sx={{ 
            height:'250px',
            width:'350px',
            borderRadius:'20px',
             }}/>
        </Grid>
        <Grid item>
        <CardMedia
          component='img'
          image="https://www.themealdb.com/images/media/meals/vptqpw1511798500.jpg"
          sx={{ 
            height:'250px',
            width:'350px',
            borderRadius:'20px',
             }}/>
        </Grid>
        <Grid item>
        <CardMedia
          component='img'
          image="https://www.themealdb.com/images/media/meals/wuvryu1468232995.jpg"
          sx={{ 
            height:'250px',
            width:'350px',
            borderRadius:'20px',
             }}/>
        </Grid>
      </Grid>
      </CardContent>
      <Box sx={{ 
          display: 'flex',
          padding: 2,
          }}>
        <Card
              component='form'
              sx={{
                display: 'flex',
                flexDirection: 'column',
                width: 400,
                margin: 3,
                padding: 2,
                alignItems: 'center',
                bgcolor: "#ffffff",
                borderRadius:'5px',
                boxShadow: '5px 3px 10px 0px rgba(0, 0, 0, 0.25)',
              }}
            >
               <TextField
                    id="filled-multiline-static"
                    label="Input Review"
                    multiline
                    rows={4}
                    variant="filled"
                    sx={{
                        color: "#000000",
                        backgroundColor: "#FFFFFF",
                        width: 380,
                    }}
                  />
                  <Rating
                    name="simple-controlled"
                    size='large'
                    value={data.ratingsAverage}
                    // onChange={(event, newValue) => {
                    //   setValue(newValue);
                    // }}
                  />
              <Button
                type='submit'
                size='large'
                sx={{
                  color: "#ffffff",
                  backgroundColor: "#000000",
                  marginTop: 2,
                  width: 208,
                  height: 60,
                  borderRadius:2,
                  '&:hover': {
                      backgroundColor: '#444444',
                  },
            }}
              >Review
              </Button>
        </Card>
      </Box>
     
      <Box 
        sx={{ 
          bgcolor: "#3A5A40",
          width: '100%',
          height: 100,
          display: 'flex',
          padding: 2,
          justifyContent:"right"
          }}>
        <Button
          variant='contained'
          size='large'
          onClick={() => {
            navigate('/booking', { replace: true });
          }}
          sx={{
            color: "#000000",
            backgroundColor: "#FFFFFF",
            width: 208,
            height: 60,
            margin: '15px 50px',
            borderRadius:2,
            gridArea: 'sidebar',
            '&:hover': {
                backgroundColor: '#c2c0c0',
             },
          }}>
          Booking
        </Button>
        </Box>
    </Card>
    </Box>
  );
};

export default DetailPage;
