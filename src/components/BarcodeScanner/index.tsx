import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { normaliseBarcode, isValidBarcode } from '../SearchForm'
import { submitSearch, setError } from "../../state/search/actions";
import {
  getShowBarcodeScanner,
} from "../../state/search/selectors";
import { Container } from "./styles"

const BarcodeScanner = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const dispatch = useDispatch();
  const showBarcodeScanner = useSelector(getShowBarcodeScanner);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      // @ts-ignore
      setHasPermission(status === 'granted');
    })();
  }, [showBarcodeScanner]);

  const handleBarCodeScanned = ({ data }: { data: string }) => {
    setScanned(true)
    const normalisedBarcode = normaliseBarcode(data);
    const isValid = isValidBarcode(normalisedBarcode);
    if (isValid) {
      dispatch(submitSearch(normalisedBarcode));
    } else {
      dispatch(setError("Barcode not valid"));
    }
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <Container>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
    </Container>
  );
}

export default BarcodeScanner;