/* eslint-disable no-useless-escape */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Card,
  CircularProgress,
  Container,
  Link,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import { SignupPayload } from 'types/payload';
import { useMutation } from '@tanstack/react-query';
import AuthApi from 'api/services/auth';
import { isAxiosError } from 'api/axios';
import Swal from 'sweetalert2';

const SignupPage = () => {
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
  } = useForm<SignupPayload>({
    defaultValues: {
      email: '',
      password: '',
      name: '',
      passwordConfirm: '',
    },
    mode: 'onChange',
  });

  const signupMutation = useMutation(AuthApi.signup, {
    onError: (error) => {
      if (isAxiosError<ApiResponse>(error)) {
        if (error.response) {
          const {
            response: {
              data: { message },
            },
          } = error;
          // Error from backend doesn't have localization feature. So i do it manually.
          // Its not effective because I need to know every possible error.

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
    onSuccess: () => {
      reset();
      Swal.fire({
        title: 'Success',
        text: 'User berhasil dibuat Silahkan cek email anda untuk menindak lanjuti upload foto profil',
        icon: 'success',
      });
      navigate('/auth/login', {
        replace: true,
      });
    },
  });
  const onSubmit = (values: SignupPayload) => {
    signupMutation.mutate({
      name: values.name,
      email: values.email,
      password: values.password,
      passwordConfirm: values.passwordConfirm,
    });
  };

  const localizationValidationError = (errorMessage?: string) => {
    switch (errorMessage) {
      case 'Email already use':
        return 'Email sudah digunakan';
      case `"email" must be a valid email`:
        return 'Masukan email yang valid';
      default:
        return errorMessage;
    }
  };

  useEffect(() => {
    if (errors.name?.type) trigger('name');
    if (errors.email?.type) trigger('email');
    if (errors.password?.type) trigger('password');
    if (errors.passwordConfirm?.type) trigger('passwordConfirm');
  }, []);

  return (
    <>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Card
          sx={{
            display: 'flex',
            padding: 3,
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px',
            backgroundColor: '#152A38',
            borderRadius: 3,
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
                marginTop: -2,
                marginBottom: '20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Typography
                component='h1'
                variant='h5'
                sx={{
                  fontSize: '55px',
                  fontWeight: 'bold',
                  color: '#FFCC1D',
                }}
              >
                Sign Up
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
                name='name'
                rules={{
                  required: 'Nama harus diisi',
                }}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    // label='nama'
                    placeholder='Name'
                    name='name'
                    onChange={onChange}
                    value={value}
                    error={Boolean(errors.name?.message)}
                    helperText={localizationValidationError(
                      errors.name?.message
                    )}
                    sx={{
                      input: {
                        color: '#000000',
                        backgroundColor: '#FFFFFF',
                        width: 300,
                        borderRadius: 2,
                        '& fieldset': { border: 'none' },
                      },
                    }}
                  />
                )}
              />
              <Controller
                control={control}
                name='email'
                rules={{
                  required: 'Email harus diisi',
                  pattern: {
                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                    message: 'Masukan email yang valid',
                  },
                }}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    // label='email'
                    placeholder='Email'
                    name='email'
                    onChange={(e) => {
                      e.target.value = e.target.value.trim();
                      onChange(e);
                    }}
                    value={value}
                    error={Boolean(errors.email?.message)}
                    helperText={localizationValidationError(
                      errors.email?.message
                    )}
                    sx={{
                      input: {
                        color: '#000000',
                        backgroundColor: '#FFFFFF',
                        width: 300,
                        borderRadius: 2,
                        '& fieldset': { border: 'none' },
                      },
                    }}
                  />
                )}
              />
              <Controller
                name='password'
                control={control}
                rules={{
                  required: 'Password harus diisi',
                  minLength: {
                    value: 6,
                    message: 'Password minimal 8 karakter',
                  },
                }}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    // label='password'
                    placeholder='Password'
                    name='password'
                    type='password'
                    value={value}
                    onChange={(e) => {
                      e.target.value = e.target.value.trim();
                      onChange(e);
                      if (watch('passwordConfirm') !== '') {
                        setValue('passwordConfirm', watch('passwordConfirm'), {
                          shouldValidate: true,
                          shouldTouch: false,
                        });
                      }
                    }}
                    error={Boolean(errors.password?.message)}
                    helperText={localizationValidationError(
                      errors.password?.message
                    )}
                    sx={{
                      input: {
                        color: '#000000',
                        backgroundColor: '#FFFFFF',
                        width: 300,
                        borderRadius: 2,
                      },
                    }}
                  />
                )}
              />
              <Controller
                name='passwordConfirm'
                control={control}
                rules={{
                  required: 'Konfirmasi password harus diisi',
                  validate: {
                    notMatch: (value) =>
                      value === watch('password') || 'Password tidak sama',
                  },
                }}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    // label='konfirmasi password'
                    placeholder={'Confirm Password'}
                    name='passwordConfirmation'
                    type='password'
                    value={value}
                    onChange={(e) => {
                      e.target.value = e.target.value.trim();
                      onChange(e);
                    }}
                    error={Boolean(errors.passwordConfirm?.message)}
                    helperText={localizationValidationError(
                      errors.passwordConfirm?.message
                    )}
                    sx={{
                      input: {
                        color: '#000000',
                        backgroundColor: '#FFFFFF',
                        width: 300,
                        borderRadius: 2,
                      },
                    }}
                  />
                )}
              />
              <Button
                disabled={!isDirty || !isValid}
                type='submit'
                size='large'
                startIcon={
                  signupMutation.isLoading && <CircularProgress size={20} />
                }
                sx={{
                  color: '#000000',
                  backgroundColor: '#FFCC1D',
                  marginTop: 2,
                  width: 208,
                  height: 60,
                  borderRadius: 2,
                  '&:hover': {
                    backgroundColor: '#FFFFFF',
                  },
                }}
              >
                {signupMutation.isLoading ? 'Loading' : 'Register'}
              </Button>
            </Box>
            <Typography
              component='p'
              variant='body1'
              sx={{
                fontSize: '14px',
                textAlign: 'center',
                color: '#FFFFFF',
              }}
            >
              Already have one?{' '}
              <Link href='/auth/login' color='#FFCC1D'>
                Login
              </Link>
            </Typography>
          </Box>
        </Card>
      </Container>
    </>
  );
};

export default SignupPage;
