import React from 'react';
import { Box, Typography } from '@mui/material';

const ProductPage: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom color="#A264FC">
        ProductPage
      </Typography>
    </Box>
  );
};

export default ProductPage;
