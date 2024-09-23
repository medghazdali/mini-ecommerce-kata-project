import React from 'react';
import { Box, Typography } from '@mui/material';

const DashboardPage: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom color="#A264FC">
        Dashboard
      </Typography>
    </Box>
  );
};

export default DashboardPage;
