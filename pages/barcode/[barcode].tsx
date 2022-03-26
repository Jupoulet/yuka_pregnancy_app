import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";

import styles from "../../styles/Barcode.module.css";
import { OpenFoodFactResponse } from "../../models/OpenFoodFactAPI";
import { Title } from "../../components/title/Title";
import ProductSheet from "../../domains/product-sheet/ProductSheet";

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

  return (
    <ProductSheet
      id={id}
      name={generic_name_fr}
      categories={categories}
      image={image_url}
      ingredients={ingredients}
      brands={brands}
    />
  );
};

export default Barcode;
