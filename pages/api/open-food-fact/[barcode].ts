// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const barcode = req.query.barcode;
  const result = await fetch(`https://world.openfoodfacts.org/api/v0/product/${barcode}`);
  const parsed = await result.json();
  res.status(200).json(parsed)
}
