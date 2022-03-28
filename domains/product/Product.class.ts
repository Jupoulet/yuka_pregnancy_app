import { Ingredient as IngredientType, Product as ProductType } from "../../models/OpenFoodFactAPI";
import { IngredientsList } from "../product-sheet/ingredients-list";
import { ConsumeWithCaution, DangerousReasonType } from "./Product.type";
import { Ingredient } from "../ingredient/Ingredient.class";

export class Product {
  abbreviated_product_name_fr: ProductType['abbreviated_product_name_fr'] = '';
  brands: ProductType['brands'] = '';
  id: ProductType['id'] = '';
  generic_name_fr: ProductType['generic_name_fr'] = '';
  ingredients: ProductType['ingredients'];
  image_url: ProductType['image_url'] = '';
  categories: ProductType['categories'] = '';

  constructor(product: ProductType) {
    const {
      abbreviated_product_name_fr,
      brands,
      id,
      generic_name_fr,
      ingredients,
      image_url,
      categories,
    } = product;
  
    this.abbreviated_product_name_fr = abbreviated_product_name_fr;
    this.brands = brands;
    this.id = id;
    this.generic_name_fr = generic_name_fr;
    this.ingredients = ingredients;
    this.image_url = image_url;
    this.categories = categories;
  }

  isDangerous(): DangerousReasonType {
    return {
      ingredients: [],
      notRecommended: false,
    };
  }

  isToConsumeWithCaution(): ConsumeWithCaution {
    const returnValue: ConsumeWithCaution = {
      ingredients: [],
      notRecommended: false,
    };

    for (const ingredient of this.ingredients) {
      const ingredientInstance = new Ingredient(ingredient);
      if (ingredientInstance.isCoffee()) {
        returnValue.ingredients.push(ingredient);
        returnValue.notRecommended = true;
      }
    }

    return returnValue;
  }
}