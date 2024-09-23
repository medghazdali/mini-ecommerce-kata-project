import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../config/axios';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  try {
    const response = await axiosInstance.get('/products');
    return response.data;
  } catch (error) {
    throw error;
  }
});
