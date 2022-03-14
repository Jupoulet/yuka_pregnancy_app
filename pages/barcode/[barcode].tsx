import { NextPage } from "next";
import Image from 'next/image'
import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";

import styles from "../../styles/Barcode.module.css";
import {OpenFoodFactResponse, Product} from "../../models/OpenFoodFactAPI";
import { Title } from "../../components/title/Title";
import { ProgressBar } from "../../components/progress-bar/ProgressBar";
import { Tag, listedTagColors } from "../../components/tag/Tag";
import { getTagColor } from '../../models/utils';

const ProductInformationWrapper: React.FC<{ title: string }> = ({ children, title }) => {
  return (
    <div className="mt-4">
      <Title size="small" className="mb-4">{title}</Title>
      {children}
    </div>
  )
}

const fetcher = async (url: string):Promise<OpenFoodFactResponse> => {
  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data
};

const BackHome = () => <Link href="/">Go back home</Link>;

type ErrorComponentProps = {
  message: string;
};
const ErrorComponent = ({ message }: ErrorComponentProps) => (
  <div>
    <p>{message}</p>
    <BackHome />
  </div>
);

const Barcode: NextPage = () => {
  const { query } = useRouter();
  const { data, error } = useSWR(
    () => query.barcode && `/api/open-food-fact/${query.barcode}`,
    fetcher
  );

  if (error) return <ErrorComponent message={error.message as string} />;
  if (!data) return <div>Loading...</div>;
  if (data.status === 0)
    return <ErrorComponent message={data.status_verbose} />;

  const { categories, brands, id, generic_name_fr, ingredients, image_url } =
    data.product;
  console.log('Product', data.product.ingredients);
  return (
    <section id={id}>
      <BackHome />
      <article className="p-4 border border-slate-700 border-solid rounded">
        <div className="grid grid-cols-[auto_1fr] gap-x-4">
          <div className="my-0 mx-auto w-36 h-36 relative rounded-full border border-slate-600">
            <Image
              className="rounded-full"
              src={image_url || ''}
              alt="product image"
              layout="fill"
              objectFit="contain"
              quality={100}
            />
          </div>
          <Title>{generic_name_fr}</Title>
        </div>
        <ProductInformationWrapper title="Catégories">
          <div className="flex flex-wrap gap-2">
            {categories.split(',').map((categorie, index) => {
              return <Tag key={categorie} color={getTagColor(index, listedTagColors.length)}>{categorie}</Tag>
            })}
          </div>
        </ProductInformationWrapper>
        <ProductInformationWrapper title="Marques">
          {brands}
        </ProductInformationWrapper>
        <ProductInformationWrapper title="Ingrédients">
          <ul>
            {ingredients
                .sort((a, z) => z.percent_estimate - a.percent_estimate)
                .map((i) => {
                  return (
                    <div key={i.id}>
                      <li key={i.id}>{i.text} {i.percent_estimate}</li>
                      <ProgressBar width={i.percent_estimate} />
                    </div>
                  )
                })
            }
          </ul>
        </ProductInformationWrapper>
        

      </article>
      <table className={styles.product}>
        <tbody>
          <tr>
            <td>Brands</td>
            <td>{brands}</td>
          </tr>
          <tr>
            <td>Description</td>
            <td>{generic_name_fr}</td>
          </tr>
          <tr>
            <td>Ingredients:</td>
            <td>
              <ul>
                {ingredients
                    .sort((a, z) => z.percent_estimate - a.percent_estimate)
                    .map((i) => {
                      return (
                          <li key={i.id}>{i.text} {i.percent_estimate}</li>
                      )
                    })
                }
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
      <BackHome />
    </section>
  );
};

export default Barcode;
