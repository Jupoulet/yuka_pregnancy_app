import React, { useEffect } from 'react';
import Quagga from 'quagga';

interface BarcodeData {
  codeResult: {
    code: string,
    format: "code_128" | "code_39" | "codabar" | "ean_13" | "ean_8" | "upc_a" | "upc_e"
  }
}

const BarcodeReader: React.FC = () => {
  const handleBarcode = (data: BarcodeData) => {
    console.log('BARCODE READ', data);
  }
  useEffect(() => {
    Quagga.init({
      inputStream : {
        name : "Live",
        type : "LiveStream",
        target: document.querySelector('#quaggaTarget')    // Or '#yourElement' (optional)
      },
      decoder : {
        readers : ["ean_reader"]
      }
    }, function(err: Error) {
        if (err) {
            console.log(err);
            return
        }
        console.log("Initialization finished. Ready to start");
        Quagga.start();
        Quagga.onDetected(handleBarcode)
    });

    return () => Quagga.stop();
  }, [])
  return (
    <div id="quaggaTarget" />
  )
}

export default BarcodeReader;