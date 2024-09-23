import React from 'react';
import { CardContent, CardMedia, Typography, Button, Box } from '@mui/material';
import { Product } from '../../../types/Product';
import { CustomCard } from '../../../components/common/Card/CustomCard';

interface ProductCardProps {
  product: Product;
  onAddToCart: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <CustomCard sx={{ maxWidth: 345, height: '380px', margin: '20px' }} shadow>
      <CardMedia component="img" height="150" image={product.image} alt={product.title} sx={{ objectFit: 'contain' }} />
      <CardContent>
        <Box
          sx={{
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 1,
            textOverflow: 'ellipsis',
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontWeight: 'bold',
              fontSize: '14px',
              cursor: 'pointer',
            }}
          >
            {product.title}
          </Typography>
        </Box>

        <Box
          sx={{
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 3,
            textOverflow: 'ellipsis',
          }}
        >
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
        </Box>

        <Typography variant="h6" color="primary" sx={{ marginTop: 1 }}>
          ${product.price.toFixed(2)}
        </Typography>
      </CardContent>

      <Box sx={{ display: 'flex', marginTop: 2, marginLeft: '10px' }}>
        <Button variant="contained" color="primary" onClick={onAddToCart}>
          Add to Cart
        </Button>
      </Box>
    </CustomCard>
  );
};

export default ProductCard;
