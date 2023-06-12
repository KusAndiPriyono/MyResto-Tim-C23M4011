import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { useState, useEffect } from 'react';
import * as API from 'api/services';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {  Button, } from '@mui/material';
import NavDashboard from '../nav/NavDashboard';

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

interface Props {
  loading?: boolean;
  // allRestaurantsLength: number;
  // booking: boolean;
}

export default function UserListAdmin(props: Props) {
  const { loading = false } = props;

  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await API.DataGet('users');
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
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <NavDashboard/>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Paper sx={{ width: '100%', overflow: 'hidden'}}>
            <TableContainer sx={{ maxHeight: 500,  pl:5}}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow >
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Role</TableCell>
                  <TableCell align="center">Action</TableCell>
                </TableRow>
              </TableHead>
                <TableBody>
                {(loading ? Array.from(new Array(3)) : data).map((data, index) => (
                  <TableRow
                  key={data._id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {data.name}
                  </TableCell>
                  <TableCell >{data.email}</TableCell>
                  <TableCell >{data.role}</TableCell>
                  <TableCell align="center" >
                      <Button
                          variant='contained'
                          // component={Link}
                          // to={`/detail/${data._id}`}
                          sx={{ backgroundColor:'#007c17',}}
                        >
                          Edit
                        </Button>
                        <Button
                          variant='contained'
                          // component={Link}
                          // to={`/detail/${data._id}`}
                          sx={{ margin:2 ,backgroundColor:'#c50000',}}
                        >
                          Delete
                        </Button>
                  </TableCell>
                </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
