import { useRouter } from "next/router";
import React, { useState } from "react"
import styles from "../styles/Home.module.css";
import styleUtils from "../styles/Utils.module.css";

const SearchBarcode = () => {
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
    return (<form onSubmit={handleOnSubmit} className={styles.form}>
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

    </form>)
}
export default SearchBarcode