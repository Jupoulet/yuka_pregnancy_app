import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";

import styles from "../../styles/Barcode.module.css";

const fetcher = async (url: string) => {
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
  const { data, error } = useSWR(
    () => query.barcode && `/api/open-food-fact/${query.barcode}`,
    fetcher
  );

  if (error) return <ErrorComponent message={error.message as string} />;
  if (!data) return <div>Loading...</div>;
  if (data.status === 0)
    return <ErrorComponent message={data.status_verbose} />;

  const { abbreviated_product_name_fr, brands, id, generic_name_fr } =
    data.product;
  return (
    <section id={id}>
      <BackHome />
      <table className={styles.product}>
        <tbody>
          <tr>
            <td>Name</td>
            <td>{abbreviated_product_name_fr}</td>
          </tr>
          <tr>
            <td>Brands</td>
            <td>{brands}</td>
          </tr>
          <tr>
            <td>Description</td>
            <td>{generic_name_fr}</td>
          </tr>
        </tbody>
      </table>
      <BackHome />
    </section>
  );
};

export default Barcode;
