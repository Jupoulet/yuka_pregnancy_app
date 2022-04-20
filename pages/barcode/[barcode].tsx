import { GetServerSidePropsContext, NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useSWR, { SWRConfig, SWRConfiguration } from 'swr';

import { OFFWithPregnancyAdvices } from '../../domains/open-food-fact/OpenFoodFactAPI.type';
import ProductSheet from '../../domains/product-sheet/ProductSheet';

const fetcher = async (url: string): Promise<OFFWithPregnancyAdvices> => {
  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }

  return data;
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
  const { data, error } = useSWR(() => query.barcode && `/api/open-food-fact/${query.barcode}`, fetcher);

  if (error) return <ErrorComponent message={error.message as string} />;
  if (!data) return <div>Loading...</div>;
  if (data.status === 0) return <ErrorComponent message={data.status_verbose} />;

  const { categories, brands, id, generic_name_fr, ingredients, image_url, ingredients_pregancy } = data.product;

  return (
    <ProductSheet
      id={id}
      name={generic_name_fr}
      categories={categories}
      image={image_url}
      ingredients={ingredients}
      ingredients_pregnancy={ingredients_pregancy}
      brands={brands}
    />
  );
};

export default function Page({ fallback }: SWRConfiguration) {
  return (
    <SWRConfig value={{ fallback: fallback || {} }}>
      <Barcode />
    </SWRConfig>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { query, req } = context;
  const protocol = req.headers['x-forwarded-proto'] || 'http';
  const baseUrl = req ? `${protocol}://${req.headers.host}` : '';
  const barcode = query.barcode;
  const url = `/api/open-food-fact/${barcode}`;
  const dataProduct = await fetcher(`${baseUrl}${url}`);
  return {
    props: {
      fallback: {
        [url]: dataProduct,
      },
    },
  };
}
