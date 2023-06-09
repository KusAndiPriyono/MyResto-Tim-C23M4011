import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as API from 'api/services';
import { CardMedia, Typography } from '@mui/material';

const DetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState<any>(null);

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

  return <CardMedia component='img' image={data.imageCover} />;
};

export default DetailPage;
