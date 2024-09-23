import { useState, useMemo } from 'react';
import { Product } from '../../../types/Product';
import { SelectChangeEvent } from '@mui/material';

const categories = ['All', "men's clothing", "women's clothing", 'jewelery', 'electronics'];

interface UseProductFiltersReturn {
  searchTerm: string;
  selectedCategory: string;
  priceRange: [number, number];
  filteredProducts: Product[];
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleCategoryChange: (event: SelectChangeEvent<string>) => void;
  handlePriceRangeChange: (event: Event, newValue: number | number[]) => void;
  categories: string[];
}

export const useProductFilters = (products: Product[]): UseProductFiltersReturn => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);

  // Update search term
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  // Update selected category
  const handleCategoryChange = (event: SelectChangeEvent<string>) => {
    setSelectedCategory(event.target.value as string);
  };

  // Update price range
  const handlePriceRangeChange = (event: Event, newValue: number | number[]) => {
    setPriceRange(newValue as [number, number]);
  };

  // Filter products based on search term, category, and price range
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearchTerm = product.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesPriceRange = product.price >= priceRange[0] && product.price <= priceRange[1];

      return matchesSearchTerm && matchesCategory && matchesPriceRange;
    });
  }, [products, searchTerm, selectedCategory, priceRange]);

  return {
    searchTerm,
    selectedCategory,
    priceRange,
    filteredProducts,
    handleSearchChange,
    handleCategoryChange,
    handlePriceRangeChange,
    categories,
  };
};
