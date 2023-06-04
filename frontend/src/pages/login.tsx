/* eslint-disable no-useless-escape */
/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate } from 'react-router-dom';
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
  Container,
  TextField,
  Typography,
  Link
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
                text: 'Periksa kembali data anda',
              });
              break;
          }
        }
      }
    },

    onSuccess: (data) => {
      // Token.setToken(data.data.token);
      Token.setToken(data);
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
      <Container sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                
            }}>
        <Card
          sx={{
            display: 'flex',
            padding:3,
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px',
            backgroundColor:'#3A5A40',
            borderRadius:3,
            '@media (min-width: 768px)': {
              padding: '72px 24px',
              alignItems: 'center',
            },
          }}
        >

          <Box
            // component='aside'
            sx={{
              flexBasis: '100%',
              '@media (min-width: 768px)': {
                flexBasis: '50%',
              },
            }}
          >
            <Box
              // component='article'
              sx={{
                marginTop: -5,
                marginBottom: '20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Typography component="h1" variant="h5" sx={{
                fontSize: '55px',
                fontWeight:'bold',
                color:'#F9F5EB'
              }}>
                Sign In
            </Typography>
            </Box>
            <Box
              component='form'
              onSubmit={handleSubmit(onSubmit)}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                width: 300,
                margin: 3,
                alignItems: 'center',
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
                    // label='Email'
                    placeholder='Email'
                    name='email'
                    onChange={(e) => {
                      e.target.value = e.target.value.trim();
                      onChange(e);
                    }}
                    value={value}
                    error={Boolean(errors.email?.message)}
                    helperText={errors.email?.message}
                    sx={{
                      input: {
                        color: "#000000",
                        backgroundColor: "#FFFFFF",
                        width: 300,
                        borderRadius:2,
                        "& fieldset": { border: 'none' },
                      }
                    }}
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
                    // label='Password'
                    placeholder='Password'
                    name='password'
                    type='password'
                    value={value}
                    onChange={(e) => {
                      e.target.value = e.target.value.trim();
                      onChange(e);
                    }}
                    error={Boolean(errors.password?.message)}
                    helperText={errors.password?.message}
                    sx={{
                      input: {
                        color: "#000000",
                        backgroundColor: "#FFFFFF",
                        width: 300,
                        borderRadius:2,
                      }
                    }}
                  />
                )}
              />
               <Box  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                    width: 300,
                }}>
                <Typography
                    component='p'
                    variant='body1'
                    sx={{
                        fontSize: '14px',
                        textAlign: 'right',
                        color: '#F9F5EB',
                    }}
                >
                    <Link href="#"  color="#E0C097">
                            Forgot password?
                    </Link>
                </Typography>

               </Box>
              <Button
                disabled={!isDirty || !isValid}
                type='submit'
                variant='contained'
                size="large"
                startIcon={
                  loginMutation.isLoading && <CircularProgress size={20} />
                }
                sx={{
                  color: "#000000",
                  backgroundColor: "#FFFFFF",
                  marginTop: 2,
                  width: 208,
                  height: 60,
                  borderRadius:2,
                  '&:hover': {
                      backgroundColor: '#c2c0c0',
                  },
            }}
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
                    color: '#F9F5EB',
                }}
            >
                Not regsiter yet?{' '}
                <Link href='/auth/signup' color="#E0C097">
                    Make one
                </Link>
          </Typography>
          </Box>
        </Card>
      </Container>
    </>
  );
};

export default LoginPage;
