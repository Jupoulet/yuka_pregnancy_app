import { Advice } from "../advices/Advices.type";
import { Category } from "../caterogy/Category.type";
import { Product as ProductType, Ingredient } from "../open-food-fact/OpenFoodFactAPI.type";

export type Product = ProductType;

export interface ProductWithAdvices extends Product {
  ingredients_pregancy: {
    caution: ConsumeWithCaution;
  }
}

export interface DangerousReasonType {
  ingredients: Ingredient[];
  advices: Advice[];
  categories: Category[];
}

export type ConsumeWithCaution = DangerousReasonType;