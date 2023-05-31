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
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
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
        text: 'User berhasil dibuat',
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
          <img
            src='/images/register-illustration.svg'
            alt='Register Illustration'
            width={500}
          />
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
              color='text.primary'
              sx={{
                fontSize: '24px',
                marginTop: 0,
                marginBottom: '4px',
              }}
            >
              Sign up
            </Typography>
            <Typography
              variant='body1'
              color='text.secondary'
              sx={{
                fontSize: '16px',
                margin: 0,
              }}
            >
              Buat akun baru untuk memulai
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
              name='name'
              rules={{
                required: 'Nama harus diisi',
              }}
              render={({ field: { onChange, value } }) => (
                <TextField
                  label='nama'
                  placeholder='Masukan nama anda'
                  name='name'
                  onChange={onChange}
                  value={value}
                  error={Boolean(errors.name?.message)}
                  helperText={localizationValidationError(errors.name?.message)}
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
                  label='email'
                  placeholder='Masukan email anda'
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
                  label='password'
                  placeholder='Masukan password anda'
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
                  label='konfirmasi password'
                  placeholder={'Masukan ulang password anda'}
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
                />
              )}
            />
            <Button
              disabled={!isDirty || !isValid}
              type='submit'
              startIcon={
                signupMutation.isLoading && <CircularProgress size={20} />
              }
            >
              {signupMutation.isLoading ? 'Loading' : 'Daftar'}
            </Button>
          </Box>
          <Typography
            variant='body2'
            sx={{
              fontSize: '14px',
              textAlign: 'center',
              '& a': {
                textDecoration: 'none',
                color: 'indigo',
              },
            }}
          >
            Sudah memiliki akun? <Link to='/auth/login'>Login</Link>
          </Typography>
        </Box>
      </Card>
    </>
  );
};

export default SignupPage;
