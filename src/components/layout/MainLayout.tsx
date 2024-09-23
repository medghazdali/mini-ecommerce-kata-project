import React from 'react';
import { Box } from '@mui/material';
import Footer from '../common/Footer';
import AppBar from '../common/AppBar';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar />
      {/* Main Content Area */}
      <Box component="main" sx={{ flexGrow: 1, padding: 3 }}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default MainLayout;
