import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { normaliseBarcode, isValidBarcode } from '../SearchForm'
import { submitSearch } from "../../state/search/actions";
import { setError } from "../../state/ui/actions";
import { getShowBarcodeScanner } from "../../state/search/selectors";
import { getErrorMsg } from "../../state/ui/selectors";
import { Container, Button } from "./styles"

const BarcodeScanner = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const dispatch = useDispatch();
  const showBarcodeScanner = useSelector(getShowBarcodeScanner);
  const errorMsg = useSelector(getErrorMsg);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      // @ts-ignore
      setHasPermission(status === 'granted');
    })();
  }, [showBarcodeScanner]);

  const handleBarCodeScanned = ({ data }: { data: string }) => {
    setScanned(true);
    const normalisedBarcode = normaliseBarcode(data);
    const isValid = isValidBarcode(normalisedBarcode);
    if (isValid) {
      dispatch(submitSearch(normalisedBarcode));
    } else {
      dispatch(setError("Barcode not valid"));
    }
  };

  const handleScanAgain = () => {
    setScanned(false);
    dispatch(setError(""));
  }

  if (hasPermission === false) {
    dispatch(setError("No access to camera"));
  }

  const showScanAgain = scanned && (errorMsg === "No results found" || errorMsg === "Barcode not valid");

  return (
    <Container>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {showScanAgain && <Button title={'Tap to Scan Again'} onPress={handleScanAgain} />}
    </Container>
  );
}

export default BarcodeScanner;