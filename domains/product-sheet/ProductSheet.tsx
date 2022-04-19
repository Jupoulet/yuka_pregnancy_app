import { FC } from 'react';
import Image from 'next/image';
import { ProductInformationWrapper } from './product-information-wrapper/ProductInformationWrapper';
import { BackHome } from '../../components/back-home';
import { ProductWithAdvices as Product } from '../../domains/product/Product.type';
import { Title } from '../../components/title/Title';
import { Tag, getTagColor } from '../../components/tag';
import { IngredientsList } from './ingredients-list';
import AdvicesList from './advices-list/AdvicesList';

const QUESTION_MARK =
  'data:image/png;base64,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';

interface ProductSheetProps {
  id: Product['id'];
  image: Product['image_url'];
  name: Product['generic_name_fr'];
  categories: Product['categories'];
  ingredients: Product['ingredients'];
  ingredients_pregnancy: Product['ingredients_pregancy'];
  brands: Product['brands'];
}

const ProductSheet: FC<ProductSheetProps> = ({
  id,
  image,
  name,
  categories,
  ingredients,
  ingredients_pregnancy,
  brands,
}) => {
  return (
    <div id={id}>
      <BackHome />
      <main className="p-4 border border-slate-700 border-solid rounded">
        <header className="grid grid-cols-[auto_1fr] gap-x-4">
          <div className="my-0 mx-auto w-36 h-36 relative rounded-full border border-slate-600">
            <Image
              className="rounded-full"
              src={image || QUESTION_MARK}
              alt="product image"
              layout="fill"
              objectFit="contain"
              quality={100}
            />
          </div>
          <Title>{name}</Title>
        </header>
        <AdvicesList ingredients_pregnancy={ingredients_pregnancy} />
        {categories && (
          <ProductInformationWrapper title="Catégories">
            <div className="flex flex-wrap gap-2">
              {categories.split(',').map((categorie, index) => {
                return (
                  <Tag key={categorie} color={getTagColor(index)}>
                    {categorie}
                  </Tag>
                );
              })}
            </div>
          </ProductInformationWrapper>
        )}
        <ProductInformationWrapper title="Marques">{brands}</ProductInformationWrapper>
        <IngredientsList ingredients={ingredients} />
        <BackHome />
      </main>
    </div>
  );
};

export default ProductSheet;
