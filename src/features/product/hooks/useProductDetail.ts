import { useState, useEffect } from 'react';
import { Product } from '../../../types/Product';
import axiosInstance from '../../../config/axios';

interface ProductDetail {
  product: Product | null;
  loading: boolean;
  error: string | null;
}
export const useProductDetail = (productId: string): ProductDetail => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axiosInstance.get(`/products/${productId}`);
        if (response.status !== 200) {
          throw new Error('Failed to fetch product');
        }
        const data = await response.data;
        setProduct(data);
      } catch (err) {
        setError((err as Error).message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  return { product, loading, error };
};
