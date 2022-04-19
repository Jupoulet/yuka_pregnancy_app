import React, { useEffect } from 'react';
// @ts-ignore
import Quagga from 'quagga';

import styles from '../../styles/barcode-reader/BarcodeReader.module.css';

interface BarcodeData {
  codeResult: {
    code: string;
    format: 'code_128' | 'code_39' | 'codabar' | 'ean_13' | 'ean_8' | 'upc_a' | 'upc_e';
  };
}

interface BarcodeReaderProps {
  onBarcodeScan: (codeBar: string) => void;
}

const BarcodeReader: React.FC<BarcodeReaderProps> = ({ onBarcodeScan }) => {
  const handleBarcode = React.useCallback(
    (data: BarcodeData) => {
      onBarcodeScan(data.codeResult.code);
    },
    [onBarcodeScan],
  );

  useEffect(() => {
    Quagga.init(
      {
        inputStream: {
          name: 'Live',
          type: 'LiveStream',
          target: document.querySelector('#quaggaTarget'), // Or '#yourElement' (optional)
        },
        decoder: {
          readers: ['ean_reader'],
        },
      },
      function (err: Error) {
        if (err) {
          console.log(err);
          return;
        }
        console.log('Initialization finished. Ready to start');
        Quagga.start();
        Quagga.onDetected(handleBarcode);
      },
    );

    return () => Quagga.stop();
  }, [handleBarcode]);

  return (
    <div className={styles['BarcodeReader-wrapper']}>
      <div id="quaggaTarget" className={`${styles.BarcodeReader} ${styles.Canvas}`} />
      <fieldset className={styles['BarcodeReader-fieldset']}>
        <legend>Scanner zone</legend>
      </fieldset>
    </div>
  );
};

export default BarcodeReader;
