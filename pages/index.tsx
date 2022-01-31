import React, { useState } from "react";
import type { NextPage } from "next";

import { useRouter } from "next/router";

import styles from "../styles/Home.module.css";
import styleUtils from "../styles/Utils.module.css";

const Home: NextPage = () => {
  const [barcode, setBarcode] = useState("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBarcode(e.target.value);
  };

  const handleOnSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (barcode) {
      router.push(`/barcode/${barcode}`);
    }

    return false;
  };

  return (
    <>
      <h1 className={styles.title}>Baby Yuka</h1>
      <form onSubmit={handleOnSubmit} className={styles.form}>
        <label htmlFor="barcode" className={styleUtils.visuallyHidden}>
          Barcode
        </label>
        <input
          className={styles.barcodeInput}
          id="barcode"
          type="text"
          placeholder="Barcode"
          autoFocus
          value={barcode}
          onChange={handleChange}
          required
        />
        <button type="submit" className={styles.submitButton}>
          Analyze
        </button>
      </form>
    </>
  );
};

export default Home;
