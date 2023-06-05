import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Container } from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

export default function BookingPage() {
  return (
    <Container>
      <Box
        sx={{
          backgroundColor: '#D9D9D9',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          alignItems: 'right',
          '& > :not(style)': { m: 1 },
          // width: 900,
          // height: 492,
          borderRadius: 5,
          padding: '20px',
          '& .input-field': {
            borderRadius: 1,
            backgroundColor: 'white',
          },
        }}
      >
        <TextField
          className='input-field'
          id='demo-helper-text-aligned'
          label='Name'
        />
        <TextField
          className='input-field'
          id='demo-helper-text-aligned-no-helper'
          label='Phone Number'
        />
        <TextField
          className='input-field'
          id='demo-helper-text-aligned-no-helper'
          label='Card Number'
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DateTimePicker']}>
            <DateTimePicker label='Date time' className='input-field' />
          </DemoContainer>
        </LocalizationProvider>
      </Box>
    </Container>
  );
}
