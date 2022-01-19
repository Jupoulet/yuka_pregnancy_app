import Head from "next/head";
import type { AppProps } from "next/app";
import Link from 'next/link';

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
      <Link href="/barcode/scanner">Scanner</Link>

      <main className={styles.main}>
        <h1 className={styles.title}>Baby Yuka</h1>
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default App;
