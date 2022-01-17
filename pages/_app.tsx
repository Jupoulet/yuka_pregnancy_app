import Head from "next/head";
import type { AppProps } from "next/app";
import { Layout } from "../components/Layout"
import styles from "../styles/Home.module.css";
import "../styles/globals.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Baby Yuka</title>
        <meta name="description" content="Yuka for pregnant women" />
        <link rel="icon" href="/favicon.ico" />
      </Head>



      <Layout>
        <Component {...pageProps} /></Layout>

    </div>
  );
}

export default App;
