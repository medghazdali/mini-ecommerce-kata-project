import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';
import { Product } from '../../../types/Product';

interface ProductCardProps {
  product: Product;
  onAddToCart: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: '20px', boxShadow: 3 }}>
      <CardMedia component="img" height="200" image={product.image} alt={product.title} />
      <CardContent>
        <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description.substring(0, 60)}...
        </Typography>
        <Typography variant="h6" color="primary" sx={{ marginTop: 1 }}>
          ${product.price.toFixed(2)}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
          <Button variant="contained" color="primary" onClick={onAddToCart}>
            Add to Cart
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
