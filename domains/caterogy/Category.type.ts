import { Advice } from "../advices/Advices.type";

export type Category = string;

export interface UnsafeCategories {
  categories: Category[];
  advices: Advice[];
}