import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import { useEffect, useState } from 'react';
import * as API from 'api/services';

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

export default function Orders() {
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

  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
      <Table size='small'>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Restaurant Name</TableCell>
            <TableCell>User</TableCell>
            <TableCell align='right'>Sale Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data &&
            data.map((booking) => (
              <TableRow key={booking._id}>
                <TableCell>{booking.createdAt}</TableCell>
                <TableCell>{booking.restaurant.name}</TableCell>
                <TableCell>{booking.user.name}</TableCell>
                <TableCell align='right'>{`$${booking.price}`}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <Link color='primary' href='#' onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </React.Fragment>
  );
}
