import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { normaliseBarcode, isValidBarcode } from "../../utils/search"
import { setError } from "../../state/ui/actions";
import { getShowBarcodeScanner, getErrorMsg } from "../../state/ui/selectors";
import { Container, Button, Label } from "./styles"
import { errorMessages } from '../../constants';

type Props = {
  searchBarcode: (barcode: string) => void
}

const BarcodeScanner = React.memo(({ searchBarcode }: Props) => {
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
      searchBarcode(normalisedBarcode);
    } else {
      dispatch(setError(errorMessages.BARCODE_INVALID));
    }
  };

  const handleScanAgain = () => {
    setScanned(false);
    dispatch(setError(""));
  }

  if (hasPermission === false) {
    dispatch(setError(errorMessages.NO_CAMERA_ACCESS));
  }

  const hasError = [errorMessages.BARCODE_NOT_FOUND, errorMessages.BARCODE_INVALID].includes(errorMsg);
  const showScanAgain = scanned && hasError;

  return (
    <Container>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {showScanAgain && (
        <Button onPress={handleScanAgain}>
          <Label>Tap to Scan Again</Label>
        </Button>
      )}
    </Container>
  );
});

export default BarcodeScanner;