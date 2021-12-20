import { ChangeEvent, useState, useEffect } from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import styleUtils from '../styles/Utils.module.css';

const Home: NextPage = () => {
  const [barcode, setBarcode] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBarcode(e.target.value);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Baby Yuka</title>
        <meta name="description" content="Yuka for pregnant women" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Baby Yuka</h1>
        <form>
          <label htmlFor="barcode" className={styleUtils.visuallyHidden}>Barcode</label>
          <input
            className={styles.barcodeInput}
            id="barcode"
            type="text"
            placeholder="Barcode"
            autoFocus
            value={barcode}
            onChange={handleChange}
            />
        </form>
      </main>
    </div>
  )
}

export default Home
