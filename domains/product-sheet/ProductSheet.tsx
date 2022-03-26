import { FC }  from 'react';
import Image from 'next/image'
import { ProductInformationWrapper } from './product-information-wrapper/ProductInformationWrapper';
import { BackHome } from '../../components/back-home';
import { Product } from "../../models/OpenFoodFactAPI";
import { Title } from '../../components/title/Title';
import { Tag, getTagColor } from '../../components/tag';
import { IngredientsList } from './ingredients-list';

interface ProductSheetProps {
  id: Product['id'],
  image: Product['image_url'],
  name: Product['generic_name_fr'],
  categories: Product['categories'],
  ingredients: Product['ingredients'],
  brands: Product['brands'],
}
 
const ProductSheet: FC<ProductSheetProps> = ({
  id,
  image,
  name,
  categories,
  ingredients,
  brands,
}) => {
  return (
    <section id={id}>
      <BackHome />
      <article className="p-4 border border-slate-700 border-solid rounded">
        <div className="grid grid-cols-[auto_1fr] gap-x-4">
          <div className="my-0 mx-auto w-36 h-36 relative rounded-full border border-slate-600">
            <Image
              className="rounded-full"
              src={image || ''}
              alt="product image"
              layout="fill"
              objectFit="contain"
              quality={100}
            />
          </div>
          <Title>{name}</Title>
        </div>
        <ProductInformationWrapper title="Catégories">
          <div className="flex flex-wrap gap-2">
            {categories.split(',').map((categorie, index) => {
              return <Tag key={categorie} color={getTagColor(index)}>{categorie}</Tag>
            })}
          </div>
        </ProductInformationWrapper>
        <ProductInformationWrapper title="Marques">
          {brands}
        </ProductInformationWrapper>
        <IngredientsList ingredients={ingredients} />
      <BackHome />
      </article>
    </section>
  );
}
 
export default ProductSheet;