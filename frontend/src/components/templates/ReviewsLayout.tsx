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

import React from 'react';
// import Slider from 'react-slick';
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
    <Container sx={{ mt: 10, mb: 10 }}>
      <Slider {...settings}>
        {reviews.map((review) => (
          <div key={review.id}>
            <Grid
              container
              wrap='wrap'
              spacing={2}
              gap={2}
              justifyContent='center'
              columns={{ xs: 4, sm: 8, md: 6 }}
            >
              <Card
                sx={{
                  maxWidth: 1200,
                  height: 150,
                  width: 200,
                  backgroundColor: '#ffffff',
                  padding: '50px',
                  boxShadow: 1,
                  marginBottom: '10px',
                  borderRadius: '8px',
                  transition: 'background-color 0.3s',
                  '&:hover': {
                    backgroundColor: '#c2c0c0',
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
                >
                  <Avatar src='https://icon-icons.com/id/icon/bulat-akun-tombol-dengan-pengguna-dalam/72596' />
                  {review.user.name.charAt(0).toUpperCase() +
                    review.user.name.slice(1)}
                </Typography>
                <Typography>
                  <p>{review.review}</p>
                  <Typography
                    variant='body2'
                    color='#000000'
                    sx={{ display: 'flex'}}
                  >
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
          </div>
        ))}
      </Slider>
    </Container>
  );
}
