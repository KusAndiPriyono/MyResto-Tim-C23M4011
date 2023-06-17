import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import { useEffect, useState } from 'react';
import * as API from 'api/services';
import moment from 'moment';

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

type Booking = {
  _id: string;
  createdAt: string;
  restaurant: {
    _id: string;
    name: string;
  };
  user: {
    _id: string;
    name: string;
  };
  price: number;
};

export default function Deposits() {
  const [data, setData] = useState<Booking[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await API.DataGet('bookings');
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

  const totalPrice = data.reduce((val, element)=>{
    return val + element.price
  },0)

  const date= new Date()

  return (
    <React.Fragment>
      <Title>Recent Transactions</Title>
      <Typography component="p" variant="h4">
        $ {totalPrice}
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
      {moment(date).format('LLLL')}
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div>
    </React.Fragment>
  );
}
