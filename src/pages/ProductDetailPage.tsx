import React from 'react';
import { Container } from '@mui/material';
import ProductDetail from '../features/product/components/ProductDetail';

const ProductDetailPage: React.FC = () => {
  return (
    <Container maxWidth="md">
      <ProductDetail />
    </Container>
  );
};

export default ProductDetailPage;
