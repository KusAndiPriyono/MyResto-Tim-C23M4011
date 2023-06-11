import { useEffect, useState } from 'react';
import * as API from 'api/services';
import { useParams } from 'react-router-dom';
import { Card } from '@mui/material';

interface Props {
  reviews: any[];
}

export default function ReviewsLayout(props: Props) {
  const { reviews } = props;
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await API.DataGet(`restaurants/${id}`);
      if (response.status === 200) {
        setData(response.data.reviews);
        console.log(response.data.reviews);
      } else {
        setData(null);
      }
    }

    fetchData();

    return () => {
      setData(null);
    };
  }, [id, reviews]);

  return (
    <>
      {reviews.map((review) => (
        <Card key={review.id}>
          <p>{review.user.name}</p>
          <p>{review.review}</p>
          <p>{review.rating}</p>
        </Card>
      ))}
    </>
  );
}
