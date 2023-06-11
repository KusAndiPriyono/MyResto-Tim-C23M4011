import { useNavigate } from 'react-router-dom';
import {
  Skeleton,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
  Rating,
  Container,
} from '@mui/material';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as API from 'api/services';
import StripeCheckout from 'react-stripe-checkout';
import Swal from 'sweetalert2';
import MapboxLayout from 'components/templates/MapboxLayout';

interface Props {
  loading?: boolean;
}

function DetailPage(props: Props) {
  const { loading = false } = props;

  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState<any>(null);
  const [bookingInProgress, setBookingInProgress] = useState(false);

  const handleBooking = async () => {
    try {
      const response = await API.DataGet2(`bookings/checkout-session/${id}`);
      const session = response.data.session;

      // const secretKey = process.env.REACT_APP_SECRET_KEY as string;
      const secretKey = process.env.REACT_APP_SECRET_KEY as string;

      const onToken = (token: any) => {
        console.log(token);
      };

      // Mengubah state untuk memulai proses booking
      setBookingInProgress(true);

      // Redireksi ke halaman checkout Stripe
      const stripeCheckoutUrl = `https://checkout.stripe.com/c/pay/${session.id}`;
      window.location.href = session.url;

      return <StripeCheckout token={onToken} stripeKey={secretKey} />;
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Mohon untuk login terlebih dahulu',
      });
      console.error('Error', error);
    }
  };

  useEffect(() => {
    async function fetchData() {
      const response = await API.DataGet(`restaurants/${id}`);
      if (response.status === 200) {
        setData(response.data);
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
        <Typography
          color='#00aa17'
          fontSize={20}
          sx={{ textAlign: 'right', display: 'flex' }}
        >
          Usd.{data.price}
        </Typography>
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

        <MapboxLayout />

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
            onClick={handleBooking}
            disabled={bookingInProgress}
            className='booking-button'
          >
            {bookingInProgress ? 'Booking in Progress...' : 'Booking'}
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
}

export default DetailPage;
