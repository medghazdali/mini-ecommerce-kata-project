import React from 'react';
import { Box, Typography, Button, CircularProgress, Rating as MuiRating } from '@mui/material';
import { useParams } from 'react-router-dom';
import { CustomCard } from '../../../components/common/Card/CustomCard';
import { useCart } from '../../../features/cart/hooks/useCart';
import { useProductDetail } from '../hooks/useProductDetail';

const ProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const { product, loading, error } = useProductDetail(productId || '');
  const { handleAddToCart, handleIncreaseQuantity, handleDecreaseQuantity, isInCart, getCartItem } = useCart();

  // Get the product from the cart, if it exists to display quantity
  const cartItem = getCartItem(Number(productId));

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return <Typography variant="h5">Error: {error}</Typography>;
  }

  if (!product) {
    return <Typography variant="h5">Product not found</Typography>;
  }

  return (
    <CustomCard sx={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
        {/* Product Image */}
        <Box
          component="img"
          src={product.image}
          alt={product.title}
          sx={{ maxWidth: '300px', height: 'auto', objectFit: 'contain' }}
        />

        {/* Product Details */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="h4" sx={{ marginBottom: '20px' }}>
            {product.title}
          </Typography>

          <Typography variant="body1" sx={{ marginBottom: '20px' }}>
            {product.description}
          </Typography>

          <Typography variant="subtitle1" color="textSecondary" sx={{ marginBottom: '10px' }}>
            Category: {product.category}
          </Typography>

          {/* Display product rating */}
          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
            <MuiRating value={product.rating.rate} readOnly precision={0.1} />
            <Typography variant="body2" sx={{ marginLeft: 1 }}>
              ({product.rating.count} reviews)
            </Typography>
          </Box>

          <Typography variant="h5" sx={{ marginBottom: '20px' }}>
            Price: ${product.price.toFixed(2)}
          </Typography>

          {/* Conditionally render Add to Cart or Increase/Decrease buttons */}
          {isInCart(Number(productId)) ? (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Button variant="outlined" onClick={() => handleDecreaseQuantity(Number(productId))}>
                -
              </Button>
              <Typography>{cartItem?.quantity}</Typography>
              <Button variant="outlined" onClick={() => handleIncreaseQuantity(Number(productId))}>
                +
              </Button>
            </Box>
          ) : (
            <Button variant="contained" color="primary" onClick={() => handleAddToCart(product)}>
              Add to Cart
            </Button>
          )}
        </Box>
      </Box>
    </CustomCard>
  );
};

export default ProductDetail;
