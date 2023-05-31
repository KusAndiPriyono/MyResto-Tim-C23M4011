/* eslint-disable no-useless-escape */
/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate, Link } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { LoginPayload } from 'types/payload';
import { useMutation } from '@tanstack/react-query';
import AuthApi from 'api/services/auth';
import axios, { isAxiosError } from 'api/axios';
import Swal from 'sweetalert2';
import Token from 'api/token';
import { useEffect } from 'react';
import {
  Box,
  Button,
  Card,
  CircularProgress,
  TextField,
  Typography,
} from '@mui/material';

const LoginPage = () => {
  const navigate = useNavigate();

  const {
    control,
    formState: { isDirty, isValid, errors },
    handleSubmit,
    setError,
    reset,
    trigger,
  } = useForm<LoginPayload>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const loginMutation = useMutation(AuthApi.login, {
    onError: (error) => {
      if (isAxiosError<ApiResponse>(error)) {
        if (error.response) {
          const {
            response: {
              data: { message },
            },
          } = error;

          switch (message) {
            case 'Password is wrong':
              setError('password', {
                message,
              });
              break;
            case 'Email not found':
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
                icon: 'error',
                title: 'Oops...',
              });
              break;
          }
        }
      }
    },

    onSuccess: (data) => {
      Token.setToken(data.data.token);
      reset();
      Swal.fire({
        icon: 'success',
        title: 'Login Success',
        text: 'Pengguna berhasil masuk',
      });
      axios.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${Token.getToken()}`;
      navigate('/', {
        replace: true,
      });
    },
  });

  const onSubmit = (values: LoginPayload) => {
    loginMutation.mutate(values);
  };

  useEffect(() => {
    if (errors.email?.type) trigger('email');
    if (errors.password?.type) trigger('password');
  }, []);

  return (
    <>
      <Card
        sx={{
          display: 'flex',
          gap: '40px',
          '@media (min-width: 768px)': {
            padding: '72px 24px',
            alignItems: 'center',
          },
        }}
      >
        <Box
          component='aside'
          sx={{
            display: 'none',
            '@media (min-width: 768px)': {
              display: 'block',
              flexBasis: '50%',
              height: 'fit-content',
            },
          }}
        >
          <img src='/images/login-illustration.svg' alt='' width={500} />
        </Box>
        <Box
          component='aside'
          sx={{
            flexBasis: '100%',
            '@media (min-width: 768px)': {
              flexBasis: '50%',
            },
          }}
        >
          <Box
            component='article'
            sx={{
              marginBottom: '20px',
            }}
          >
            <Typography
              variant='h1'
              color={'dark' ? 'gray.300' : 'gray.700'}
              sx={{
                fontSize: '24px',
                marginTop: 0,
                marginBottom: '4px',
              }}
            >
              Hai, Selamat Datang
            </Typography>
            <Typography
              component='p'
              color={'dark' ? 'gray.5' : 'gray.6'}
              sx={{
                fontSize: '16px',
                margin: 0,
              }}
            >
              Senang bertemu denganmu lagi. Ayo login untuk melanjutkan
            </Typography>
          </Box>
          <Box
            component='form'
            onSubmit={handleSubmit(onSubmit)}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}
          >
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
            <Controller
              name='password'
              control={control}
              rules={{
                required: 'Password tidak boleh kosong',
              }}
              render={({ field: { onChange, value } }) => (
                <TextField
                  label='Password'
                  placeholder='Masukkan password anda'
                  name='password'
                  type='password'
                  value={value}
                  onChange={(e) => {
                    e.target.value = e.target.value.trim();
                    onChange(e);
                  }}
                  error={Boolean(errors.password?.message)}
                  helperText={errors.password?.message}
                />
              )}
            />
            <Button
              disabled={!isDirty || !isValid}
              type='submit'
              variant='contained'
              startIcon={
                loginMutation.isLoading && <CircularProgress size={20} />
              }
            >
              {loginMutation.isLoading ? 'Loading' : 'Masuk'}
            </Button>
          </Box>
          <Typography
            component='p'
            variant='body1'
            sx={{
              fontSize: '14px',
              textAlign: 'center',
            }}
          >
            Belum memiliki akun?{' '}
            <Link to='/auth/signup' color='primary'>
              Daftar sekarang
            </Link>
          </Typography>
        </Box>
      </Card>
    </>
  );
};

export default LoginPage;
