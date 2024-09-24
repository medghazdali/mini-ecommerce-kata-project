import React from 'react';
import { useCart } from '../features/cart/hooks/useCart';
import { Button, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CheckoutPage: React.FC = () => {
  const { cartItems, totalAmount } = useCart();
  const navigate = useNavigate();

  const handleConfirmOrder = () => {
    // Here, we can handle order confirmation (e.g., API call submission checkout)
    // We will just make a simple alert
    alert('Order confirmed');
  };

  if (cartItems.length === 0) {
    return (
      <Box sx={{ padding: 4 }}>
        <Typography variant="h5">Your cart is empty. Please add items to the cart before checking out.</Typography>
        <Button variant="contained" onClick={() => navigate('/')}>
          Go Back to Products
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" mb={2}>
        Checkout
      </Typography>
      <Typography variant="h6">Total Amount: ${totalAmount.toFixed(2)}</Typography>
      <Button variant="contained" color="primary" onClick={handleConfirmOrder} sx={{ mt: 3 }}>
        Confirm Order
      </Button>
    </Box>
  );
};

export default CheckoutPage;
