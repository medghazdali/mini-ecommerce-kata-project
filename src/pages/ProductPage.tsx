import React from 'react';
import ProductList from '../features/product/components/ProductList'; // Product List Component
import { Container, Typography } from '@mui/material';
import { useProductList } from '../features/product/hooks/useProductList';

const ProductPage: React.FC = () => {
  const { products, loading, error } = useProductList();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Product List
      </Typography>
      <ProductList products={products} /> {/* Display products */}
    </Container>
  );
};

export default ProductPage;
