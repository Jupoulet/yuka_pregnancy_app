import { FC, useState } from 'react';
import { Product } from '../../product/Product.type';
import { ProductInformationWrapper } from '../product-information-wrapper';
import { ProgressBar } from '../../../components/progress-bar';
import { Ingredient } from '../../ingredient/Ingredient.type';

interface IngredientsListProps {
  ingredients: Product['ingredients'];
}

export const IngredientsList: FC<IngredientsListProps> = ({ ingredients }) => {
  const [showRestOfIngredients, setShowRestOfIngredients] = useState(false);
  const handleToggleIngredients = () => setShowRestOfIngredients(old => !old);

  const sortedIngredients = ingredients.sort((a, z) => z.percent_estimate - a.percent_estimate);

  const generateIngredients = (ingredients: IngredientsListProps['ingredients']) => {
    return ingredients.map((i: Ingredient) => {
      return (
        <div key={i.id} className="mb-2">
          <li key={i.id}>
            {i.text} - <span className="font-bold	">{i.percent_estimate.toFixed(0)}%</span>
          </li>
          <ProgressBar width={i.percent_estimate} />
        </div>
      );
    });
  };
  return (
    <ProductInformationWrapper title="Ingrédients">
      <ul>
        {generateIngredients(sortedIngredients.slice(0, 5))}
        {showRestOfIngredients ? generateIngredients(sortedIngredients.slice(5)) : null}
      </ul>

      <button
        onClick={handleToggleIngredients}
        type="button"
        className="
        text-white
        bg-gray-700
        py-2
        px-4
        border
        rounded
        my-4
        hover:bg-gray-500
        ">
        {showRestOfIngredients ? 'Cacher une partie des ingredients' : 'Voir les autres ingrédients'}
      </button>
    </ProductInformationWrapper>
  );
};

export default IngredientsList;
