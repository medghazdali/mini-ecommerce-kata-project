import { useEffect } from 'react';
import { fetchProducts } from '../../../store/product/productThunkAction';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { ProductState } from '../../../types/Product';

export const useProductList = (): ProductState => {
  const dispatch = useAppDispatch();
  const { products, loading, error } = useAppSelector((state) => state.products); // Access the products state

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return { products, loading, error };
};
