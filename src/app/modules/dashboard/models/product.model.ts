export interface Product {
  image: string;
  title: string;
  price: string;
  oldPrice?: string;
  rate: number;
  reviews: number;
  category: string;
  sale?: number;
}
