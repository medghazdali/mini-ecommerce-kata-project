import React from 'react';
import { Container, Typography } from '@mui/material';
import ProductList from '../features/product/components/ProductList';
import { useProductList } from '../features/product/hooks/useProductList';
import { useCart } from '../features/cart/hooks/useCart';
import { useProductFilters } from '../features/product/hooks/useProductFilters'; // Import the custom hook
import ProductFilters from '../features/product/components/ProductFilters';

const ProductPage: React.FC = () => {
  const { products, loading, error } = useProductList();
  const { handleAddToCart } = useCart();

  // Apply product filters
  const {
    searchTerm,
    selectedCategory,
    priceRange,
    filteredProducts,
    handleSearchChange,
    handleCategoryChange,
    handlePriceRangeChange,
    categories,
  } = useProductFilters(products);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Product List
      </Typography>

      {/* Product Filters */}
      <ProductFilters
        searchTerm={searchTerm}
        selectedCategory={selectedCategory}
        priceRange={priceRange}
        categories={categories}
        onSearchChange={handleSearchChange}
        onCategoryChange={handleCategoryChange}
        onPriceRangeChange={handlePriceRangeChange}
      />

      {/* Product List */}
      <ProductList products={filteredProducts} onAddToCart={handleAddToCart} />
    </Container>
  );
};

export default ProductPage;
