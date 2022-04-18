// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { OFFWithPregnancyAdvices, OpenFoodFactResponse } from '../../../domains/open-food-fact/OpenFoodFactAPI.type';
import { isProductToConsumeWithCaution } from '../../../domains/product/Product.service';

const addAdviceToProduct = (OFFResponse: OpenFoodFactResponse): OFFWithPregnancyAdvices => {
  const { product } = OFFResponse;
  const cautionIngredients = isProductToConsumeWithCaution(product);
  return {
    ...OFFResponse,
    product: {
      ...OFFResponse.product,
      ingredients_pregancy: {
        caution: cautionIngredients
      }
    }
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<OFFWithPregnancyAdvices>
) {
  const barcode = req.query.barcode;
  const result = await fetch(`https://world.openfoodfacts.org/api/v0/product/${barcode}`);
  const parsed = await result.json();
  const OFFResponseWithPregnancyAdvice = addAdviceToProduct(parsed);
  res.status(200).json(OFFResponseWithPregnancyAdvice)
}
