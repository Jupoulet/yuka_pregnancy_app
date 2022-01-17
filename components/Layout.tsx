import React from "react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import MainTitle from "./MainTitle";
import SearchBarcode from "./SearchBarcode";

export const Layout: NextPage = ({ children }) => {


    return (
        <> <main className={styles.main}>
            <MainTitle />
            <SearchBarcode />
            {children}</main>
        </>)
}