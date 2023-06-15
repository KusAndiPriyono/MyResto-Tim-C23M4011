import { useEffect, useState } from 'react';
import * as API from 'api/services';
import { useParams } from 'react-router-dom';
import {
  Avatar,
  Card,
  Container,
  Grid,
  Rating,
  Typography,
} from '@mui/material';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

interface Props {
  reviews: any[];
}

export default function ReviewsLayout(props: Props) {
  const { reviews } = props;
  const { id, name } = useParams();
  const [data, setData] = useState(null);

  const settings = {
    dots: true,
    infinite: false,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1180,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    async function fetchData() {
      const response = await API.DataGet(`restaurants/${id}`);
      if (response.status === 200) {
        setData(response.data.reviews);
      } else {
        setData(null);
      }
    }

    fetchData();

    return () => {
      setData(null);
    };
  }, [id, name, reviews]);

  return (
    <Container sx={{ mt: 6, mb: 6 }}>
      <Slider {...settings}>
        {reviews.map((review) => (
          <Grid
            key={review.id}
            container
            wrap='wrap'
            spacing={2}
            gap={2}
            justifyContent='center'
            columns={{ xs: 4, sm: 8, md: 6 }}
            padding={2}
          >
            <Card
              sx={{
                maxWidth: 1200,
                height: 150,
                width: 200,
                backgroundColor: '#152A38',
                color: '#fff',
                padding: '50px',
                boxShadow: 1,
                marginBottom: '10px',
                borderRadius: 4,
                transition: 'background-color 0.3s',
                '&:hover': {
                  backgroundColor: '#fff',
                  color: '#000',
                },
              }}
            >
              <Typography
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '10px',
                  gap: 2,
                }}
                component='div'
              >
                <Avatar
                  src={review.user.photo}
                  alt=''
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                  }}
                />
                {review.user.name.charAt(0).toUpperCase() +
                  review.user.name.slice(1)}
              </Typography>
              <Typography component='div'>
                {review.review}
                <Typography variant='body2' sx={{ display: 'flex' }}>
                  &nbsp;
                  <Rating
                    size='small'
                    name='half-rating-read'
                    value={review.rating}
                    precision={0.1}
                    readOnly
                  />
                  &nbsp; ({review.rating})
                </Typography>
              </Typography>
            </Card>
          </Grid>
        ))}
      </Slider>
      <style>
        {`
        .slick-prev:before,
          .slick-next:before {
            color: black !important;
          }
        `}
      </style>
    </Container>
  );
}
