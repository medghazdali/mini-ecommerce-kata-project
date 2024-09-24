import React from 'react';
import { Box, Typography } from '@mui/material';
import LoginForm from '../features/login/components/LoginForm';

const LoginPage: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        flexDirection: 'column',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Login to Your Account
      </Typography>
      <Typography variant="body1" color="textSecondary" gutterBottom>
        Please enter any valid email and password to test the login functionality and access the protected routes.
      </Typography>
      <LoginForm />
    </Box>
  );
};

export default LoginPage;
