import { NextPage } from 'next';
import React from 'react';
import BarcodeScannerComponent from '../../components/barcode-reader/BarcodeReader';
import { useRouter } from 'next/router';

const BarcodeReaderPage: NextPage = () => {
  const router = useRouter();

  const handleOnUpdate = (codeBar: string) => {
    router.push(`/barcode/${codeBar}`);
  };

  return <BarcodeScannerComponent onBarcodeScan={handleOnUpdate} />;
};

export default BarcodeReaderPage;
