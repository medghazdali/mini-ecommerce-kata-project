import React from 'react';
import { Drawer, Box, Typography } from '@mui/material';
import { useCart } from '../hooks/useCart';
import CartItem from './CartItem';
import Button from '../../../components/common/Button/Button';
import { useNavigate } from 'react-router-dom';

interface CartProps {
  isCartOpen: boolean;
  toggleCart: (open: boolean) => void;
}

const Cart: React.FC<CartProps> = ({ isCartOpen, toggleCart }) => {
  const {
    cartItems,
    handleIncreaseQuantity,
    handleDecreaseQuantity,
    handleRemoveFromCart,
    handleClearCart,
    totalAmount,
  } = useCart();
  const navigate = useNavigate();
  return (
    <Drawer anchor="right" open={isCartOpen} onClose={() => toggleCart(false)}>
      <Box sx={{ width: 350, p: 2 }}>
        <Typography variant="h6" gutterBottom>
          Your Cart
        </Typography>

        {cartItems.length === 0 ? (
          <Typography>Your cart is empty.</Typography>
        ) : (
          <Box sx={{ display: 'flex', flexDirection: 'column', rowGap: '10px', marginBottom: '10px' }}>
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                product={item}
                quantity={item.quantity}
                onIncreaseQuantity={() => handleIncreaseQuantity(item.id)}
                onDecreaseQuantity={() => handleDecreaseQuantity(item.id)}
                onRemoveItem={() => handleRemoveFromCart(item.id)}
              />
            ))}
          </Box>
        )}

        {cartItems.length > 0 && (
          <Button variant="contained" color="error" fullWidth onClick={handleClearCart} label="Clear Cart" />
        )}
        <Typography variant="h6">Total: ${totalAmount.toFixed(2)}</Typography>
        <Button variant="contained" onClick={() => navigate('/checkout')} sx={{ mt: 2 }} label="Proceed to Checkout" />
      </Box>
    </Drawer>
  );
};

export default Cart;
