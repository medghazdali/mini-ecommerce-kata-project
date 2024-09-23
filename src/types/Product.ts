export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

export type ProductState = {
  products: Product[];
  loading: boolean;
  error: string | null;
};

export interface Rating {
  rate: number;
  count: number;
}
