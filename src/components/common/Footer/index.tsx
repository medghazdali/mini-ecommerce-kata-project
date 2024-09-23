import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <footer>
      <Box sx={{ py: 3, textAlign: 'center', backgroundColor: '#f5f5f5' }}>
        <Typography variant="body1">Contact Us: contact@katastore.com | +123 456 7890</Typography>
        <Typography variant="body2" color="textSecondary">
          © {new Date().getFullYear()} katastore. All rights reserved.
        </Typography>
      </Box>
    </footer>
  );
};

export default Footer;
