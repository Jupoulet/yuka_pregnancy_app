import React, { useState } from 'react';
import type { NextPage } from 'next';

import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const [barcode, setBarcode] = useState('');
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
      <h1 className="text-3xl font-bold text-center mb-4">Baby Yuka</h1>
      <form onSubmit={handleOnSubmit} className="flex mb-4 gap-3">
        <label
          htmlFor="barcode"
          className="inline-block absolute overflow-hidden clip-rectZero h-px w-px -m-px p-0 border-none">
          Barcode
        </label>
        <input
          className="
            bg-slate-200 border-slate-300 border p-4 text-base font-medium flex-auto rounded-full
            placeholder:text-gray-500 placeholder:font-medium placeholder:text-base
          "
          id="barcode"
          type="text"
          placeholder="Barcode"
          autoFocus
          value={barcode}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="
          bg-slate-200 border-slate-300 cursor-pointer py-4 px-6 text-base rounded-full transition
          hover:bg-slate-300
          ">
          Analyze
        </button>
      </form>
    </>
  );
};

export default Home;
