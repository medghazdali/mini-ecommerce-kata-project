import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Container sx={{ padding: 10, textAlign: 'center' }}>
      <Box sx={{ flexGrow: 1, padding: 3 }}>
        <Typography variant="h4" component="h1" gutterBottom color="#A264FC">
          Page not found !!
        </Typography>
      </Box>
      <Button
        variant="outlined"
        sx={{ marginTop: '20px' }}
        onClick={() => {
          navigate('/');
        }}
      >
        Go Home
      </Button>
    </Container>
  );
};

export default NotFoundPage;
