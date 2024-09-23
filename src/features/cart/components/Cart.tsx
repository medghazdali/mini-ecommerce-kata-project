import React from 'react';
import { Drawer, Box, Typography, Grid, Button } from '@mui/material';
import { useCart } from '../hooks/useCart';
import CartItem from './CartItem';

interface CartProps {
  isCartOpen: boolean;
  toggleCart: (open: boolean) => void;
}

const Cart: React.FC<CartProps> = ({ isCartOpen, toggleCart }) => {
  const { cartItems, handleClearCart } = useCart();

  return (
    <Drawer anchor="right" open={isCartOpen} onClose={() => toggleCart(false)}>
      <Box sx={{ width: 350, p: 2 }}>
        <Typography variant="h6" gutterBottom>
          Your Cart
        </Typography>

        {cartItems.length === 0 ? (
          <Typography>Your cart is empty.</Typography>
        ) : (
          <Grid container spacing={2}>
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </Grid>
        )}

        {cartItems.length > 0 && (
          <Button variant="contained" color="error" fullWidth onClick={handleClearCart}>
            Clear Cart
          </Button>
        )}
      </Box>
    </Drawer>
  );
};

export default Cart;
