import Head from 'next/head';
import type { AppProps } from 'next/app';

import { NavBar } from '../components/navbar/Navbar';

import styles from '../styles/Home.module.css';
import '../styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Baby Yuka</title>
        <meta name="description" content="Yuka for pregnant women" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className="w-full my-auto mx-0 md:p-8 md:max-w-2xl md:m-auto md:bg-white md:rounded-lg">
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default App;
