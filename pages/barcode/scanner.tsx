import { NextPage } from 'next';
import React from 'react';
import BarcodeScannerComponent from '../../components/barcode-reader/BarcodeReader';

const BarcodeReaderPage: NextPage = () => {
  const handleOnUpdate = (e: unknown) => {
    console.log('ON UPDATE', e);
  }

  return (
    <div>
      <BarcodeScannerComponent />
    </div>
  )
}

export default BarcodeReaderPage;