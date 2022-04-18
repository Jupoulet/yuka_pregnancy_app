import { ProductWithAdvices } from "../product/Product.type";

export interface OpenFoodFactResponse {
  code: string;
  product: Product;
  status: number;
  status_verbose: string;
  message?: string;
}

export interface OFFWithPregnancyAdvices extends Omit<OpenFoodFactResponse, 'product'> {
  product: ProductWithAdvices;
}

export interface Product {
  abbreviated_product_name_fr?: string;
  brands: string;
  id: string;
  generic_name_fr: string;
  ingredients: Ingredient[];
  image_url?: string;
  categories?: string;
}

export interface Ingredient {
  id: string;
  percent_estimate: number;
  rank?: number;
  text: string;
  vegan: 'yes' | 'no';
  vegetarian: 'yes' | 'no';
}
