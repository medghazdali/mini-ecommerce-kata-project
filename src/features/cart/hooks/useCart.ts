import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../hooks/useAppSelector';
import {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} from '../../../store/cart/cartSlice';
import { CartItem } from '../../../types/Cart';
import { Product } from '../../../types/Product';
interface UseCartReturn {
  cartItems: CartItem[];
  handleAddToCart: (product: Product) => void;
  handleIncreaseQuantity: (productId: number) => void;
  handleDecreaseQuantity: (productId: number) => void;
  handleRemoveFromCart: (productId: number) => void;
  isInCart: (productId: number) => boolean;
  getCartItem: (productId: number) => CartItem | undefined;
  handleClearCart: () => void;
  totalItems: number;
}
export const useCart = (): UseCartReturn => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);

  const handleAddToCart = (product: Product) => {
    console.log('HANDLE');
    dispatch(addToCart(product));
  };

  const handleIncreaseQuantity = (productId: number) => {
    dispatch(increaseQuantity(productId));
  };

  const handleDecreaseQuantity = (productId: number) => {
    dispatch(decreaseQuantity(productId));
  };

  const handleRemoveFromCart = (productId: number) => {
    dispatch(removeFromCart(productId));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const isInCart = (productId: number) => {
    return cartItems.some((item) => item.id === productId);
  };

  const getCartItem = (productId: number) => {
    return cartItems.find((item) => item.id === productId);
  };

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return {
    cartItems,
    handleAddToCart,
    handleIncreaseQuantity,
    handleDecreaseQuantity,
    handleRemoveFromCart,
    handleClearCart,
    totalItems,
    isInCart,
    getCartItem,
  };
};
