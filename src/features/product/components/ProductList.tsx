import React from 'react';
import { Grid } from '@mui/material';
import ProductCard from './ProductCard'; // Import the ProductCard component
import { Product } from '../../../types/Product';

interface ProductListProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, onAddToCart }) => {
  return (
    <Grid container spacing={3}>
      {products.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
          <ProductCard product={product} onAddToCart={() => onAddToCart(product)} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
