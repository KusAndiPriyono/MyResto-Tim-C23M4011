import { useEffect, useState } from 'react';
import * as API from 'api/services';
import { useParams } from 'react-router-dom';
import { Card } from '@mui/material';

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
    slidesToShow: 1,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <Slider {...settings}>
      {reviews.map((review) => (
        <div key={review.id}>
          <Card
            sx={{
              backgroundColor: '#ffffff',
              padding: '50px',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              marginBottom: '10px',
              textAlign: 'center',
            }}
          >
            <p>{review.user.name}</p>
            <p>{review.review}</p>
            <p>{review.rating}</p>
          </Card>
        </div>
      ))}
    </Slider>
  );
}
