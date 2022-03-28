import { Ingredient } from "../../models/OpenFoodFactAPI";

export interface DangerousReasonType {
  ingredients: Ingredient[];
  notRecommended: boolean;
}

export type ConsumeWithCaution = DangerousReasonType;