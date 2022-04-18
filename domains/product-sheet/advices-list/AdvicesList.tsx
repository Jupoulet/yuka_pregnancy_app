import { FC } from 'react';
import { ProductInformationWrapper } from '../product-information-wrapper';
import { ProductWithAdvices as Product } from '../../../domains/product/Product.type';


interface AdvicesListProps {
  ingredients_pregnancy: Product['ingredients_pregancy']
}
 
const AdvicesList: FC<AdvicesListProps> = ({ ingredients_pregnancy }) => {
  return (
    <ProductInformationWrapper title="Précautions femme enceintes">
      {ingredients_pregnancy.caution.advices.map(advice => <p key={advice.id}>{advice.text}</p>)}
    </ProductInformationWrapper>
  );
}
 
export default AdvicesList;