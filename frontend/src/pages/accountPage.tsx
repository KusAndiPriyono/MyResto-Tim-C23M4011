import {
  Box,
  Card,
  Typography,
  TextField,
  Button,
  CircularProgress,
} from '@mui/material';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import { UpdateMePayload } from 'types/payload';
import { useMutation } from '@tanstack/react-query';
import { isAxiosError } from 'axios';
import Swal from 'sweetalert2';
import { useEffect } from 'react';
import UserApi from 'api/services/user';

export default function AccountPage() {
  const navigate = useNavigate();

  const {
    control,
    formState: { isDirty, isValid, errors },
    handleSubmit,
    setError,
    setValue,
    watch,
    reset,
    trigger,
  } = useForm<UpdateMePayload>({
    defaultValues: {
      name: '',
      email: '',
    },
    mode: 'onChange',
  });

  const updateMeMutation = useMutation(UserApi.getUpdateAuthenticatedUser, {
    onError: (error) => {
      if (isAxiosError<ApiResponse>(error)) {
        if (error.response) {
          const {
            response: {
              data: { message },
            },
          } = error;
          switch (message) {
            case 'Email already use':
              setError('email', {
                message,
              });
              break;
            case `"email" must be a valid email`:
              setError('email', {
                message,
              });
              break;
            default:
              Swal.fire({
                title: 'Error',
                text: message,
                icon: 'error',
              });
              break;
          }
        }
      }
    },

    onSuccess: (data) => {
      Swal.fire({
        icon: 'success',
        title: 'Update Success',
        text: 'Your account has been updated',
      });
    },
  });

  const onSubmit = (values: UpdateMePayload) => {
    updateMeMutation.mutate(values);
  };

  useEffect(() => {
    if (errors.name?.type) trigger('name');
    if (errors.email?.type) trigger('email');
  }, []);

  return (
    <Container>
      <Card
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '40px',
          '@media (min-width: 768px)': {
            padding: '72px 24px',
            alignItems: 'center',
          },
        }}
      >
        <Box sx={{}}>
          <Typography
            variant='h1'
            sx={{
              fontSize: '24px',
            }}
          >
            Your Account Settings
          </Typography>
        </Box>
      </Card>
      <Card sx={{ padding: '14px', display: 'flex' }}>
        <Box
          component='form'
          onSubmit={handleSubmit(onSubmit)}
          sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}
        >
          <Typography variant='h2' sx={{ fontSize: '18px' }}>
            Username
          </Typography>
          <Controller
            control={control}
            name='name'
            rules={{
              required: 'Nama tidak boleh kosong',
            }}
            render={({ field: { onChange, value } }) => (
              <TextField
                label='nama'
                placeholder='Masukan nama anda'
                name='name'
                onChange={onChange}
                value={value}
                error={Boolean(errors.name?.message)}
                helperText={errors.name?.message}
              />
            )}
          />
          <Typography variant='h2' sx={{ fontSize: '18px' }}>
            Email
          </Typography>
          <Controller
            control={control}
            name='email'
            rules={{
              required: 'Email tidak boleh kosong',
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                message: 'Masukan email yang valid',
              },
            }}
            render={({ field: { onChange, value } }) => (
              <TextField
                label='Email'
                placeholder='Masukkan email anda'
                name='email'
                onChange={(e) => {
                  e.target.value = e.target.value.trim();
                  onChange(e);
                }}
                value={value}
                error={Boolean(errors.email?.message)}
                helperText={errors.email?.message}
              />
            )}
          />
          <Button
            variant='contained'
            color='success'
            disabled={!isDirty || !isValid}
            type='submit'
            startIcon={
              updateMeMutation.isLoading && <CircularProgress size={20} />
            }
          >
            {updateMeMutation.isLoading ? 'Loading...' : 'Save Settings'}
          </Button>
        </Box>
      </Card>
    </Container>
  );
}
