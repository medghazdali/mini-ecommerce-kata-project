import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { useAuth } from '../../../hooks/useAuth';
import validationLoginSchema from '../schemas/validationLogin.schema';

interface LoginFormInputs {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const { attemptLogin } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: yupResolver(validationLoginSchema),
  });

  const onSubmit = (data: LoginFormInputs) => {
    // Here is just an example to showing use case for logged user
    attemptLogin({ id: 1, username: 'Admin', email: data.email });
    // we can implement real authentication logic here (API call, etc.)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <TextField
          id="email"
          label="Email Address"
          variant="outlined"
          error={!!errors.email}
          helperText={errors.email?.message}
          {...register('email')}
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          variant="outlined"
          error={!!errors.password}
          helperText={errors.password?.message}
          {...register('password')}
        />
        <Button type="submit" variant="contained" sx={{ mt: 3 }}>
          Login
        </Button>
      </Box>
    </form>
  );
};

export default LoginForm;
