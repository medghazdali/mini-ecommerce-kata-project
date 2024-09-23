import React from 'react';
import ProductList from '../features/product/components/ProductList'; // Product List Component
import { Container, Typography } from '@mui/material';
import { useProductList } from '../features/product/hooks/useProductList';
import { useCart } from '../features/cart/hooks/useCart';

const ProductPage: React.FC = () => {
  const { products, loading, error } = useProductList();
  const { handleAddToCart } = useCart();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Product List
      </Typography>
      <ProductList products={products} onAddToCart={handleAddToCart} />
    </Container>
  );
};

export default ProductPage;
