import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useCart } from '../hooks/useCart';
import { CartItem as CartItemType } from '../../../types/Cart';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { handleIncreaseQuantity, handleDecreaseQuantity, handleRemoveFromCart } = useCart();

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
      <Typography>{item.title}</Typography>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Button variant="outlined" onClick={() => handleDecreaseQuantity(item.id)}>
          -
        </Button>
        <Typography sx={{ mx: 2 }}>{item.quantity}</Typography>
        <Button variant="outlined" onClick={() => handleIncreaseQuantity(item.id)}>
          +
        </Button>
      </Box>
      <Button variant="contained" color="error" onClick={() => handleRemoveFromCart(item.id)}>
        Remove
      </Button>
    </Box>
  );
};

export default CartItem;
