import { Box, Button, Rating, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import * as API from 'api/services';
import { useParams } from 'react-router-dom';

export default function AddReviews() {
  const { id } = useParams();
  const [data, setData] = useState<any>(null);
  const [value, setValue] = useState<number | null>(0);
  const [reviewText, setReviewText] = useState('');

  const handleSubmit = async () => {
    const response = await API.DataPost(`restaurants/${id}/reviews`, {
      rating: value,
      review: reviewText,
    });
    if (response.status === 200) {
      setData(response.data.data);
      console.log(response.data.data);
    }
  };

  return (
    <Typography component='div' sx={{ textAlign: 'center' }}>
      <Typography component='legend' sx={{ fontSize: 20 }}>
        Tambah Reviews
      </Typography>
      <Box
        component='form'
        sx={{
          '& .MuiTextField-root': { width: '100%', mt: 2 },
        }}
        noValidate
        autoComplete='off'
      >
        <div>
          <TextField
            id='outlined-multiline-static'
            label='Tambahkan Review'
            multiline
            rows={6}
            value={reviewText}
            onChange={(event) => setReviewText(event.target.value)}
          />
        </div>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
        <Rating
          name='simple-controlled'
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
        <Button
          variant='contained'
          onClick={handleSubmit}
          sx={{ mb: 2, ml: 2 }}
        >
          Submit
        </Button>
      </Box>
    </Typography>
  );
}
