import React from 'react';
import {
  Box,
  TextField,
  Select,
  MenuItem,
  Slider,
  Typography,
  FormControl,
  InputLabel,
  SelectChangeEvent,
} from '@mui/material';

interface ProductFiltersProps {
  searchTerm: string;
  selectedCategory: string;
  priceRange: [number, number];
  categories: string[];
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onCategoryChange: (event: SelectChangeEvent<string>) => void;
  onPriceRangeChange: (event: Event, newValue: number | number[]) => void;
}

const ProductFilters: React.FC<ProductFiltersProps> = ({
  searchTerm,
  selectedCategory,
  priceRange,
  categories,
  onSearchChange,
  onCategoryChange,
  onPriceRangeChange,
}) => {
  return (
    <Box sx={{ marginBottom: 4 }}>
      {/* Search Field */}
      <TextField
        label="Search Products"
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={onSearchChange}
        sx={{ marginBottom: 2 }}
      />

      {/* Category Filter */}
      <FormControl fullWidth sx={{ marginBottom: 2 }}>
        <InputLabel>Category</InputLabel>
        <Select value={selectedCategory} onChange={onCategoryChange} label="Category">
          {categories.map((category) => (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Price Range Filter */}
      <Box sx={{ width: '100%', marginBottom: 2 }}>
        <Typography gutterBottom>Filter by Price</Typography>
        <Slider
          value={priceRange}
          onChange={onPriceRangeChange}
          valueLabelDisplay="auto"
          min={0}
          max={1000}
          step={10}
        />
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography>${priceRange[0]}</Typography>
          <Typography>${priceRange[1]}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductFilters;
