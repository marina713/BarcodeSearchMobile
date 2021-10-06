import React, { useEffect, useState, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { View } from "react-native-animatable";
import {
  Form,
  Container,
  SubTitle,
  Input,
  InputContainer,
  RowContainer,
  Image,
  ImageBox,
  ErrorMessage,
  ZoomHandle
} from "./styles";
import { setCurrentItem, addToHistory } from "../../state/search/actions";
import { getCurrentItem, getHistoricalData } from "../../state/search/selectors";
import { setError, setShowBarcodeScanner } from "../../state/ui/actions";
import { getErrorMsg, getShowBarcodeScanner } from "../../state/ui/selectors";
import BarcodeScanner from "../BarcodeScanner";
import Camera from '../Camera';
import { API_ENDPOINT, errorMessages } from '../../constants';
import { normaliseBarcode, isValidBarcode, findItemInHistory } from "../../utils/search"

type Props = {
  scrollToTop: () => void
}

const SearchForm = React.memo(({ scrollToTop }: Props) => {
  const dispatch = useDispatch();
  const currentItem = useSelector(getCurrentItem);
  const showBarcodeScanner = useSelector(getShowBarcodeScanner);
  const errorMsg = useSelector(getErrorMsg);
  const historicalData = useSelector(getHistoricalData);
  const [inputText, setInputText] = useState('');
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    setInputText("");
  }, [currentItem]);

  const handleSubmit = () => {
    if (!loading) {
      const normalisedInput = normaliseBarcode(inputText);
      const isValid = isValidBarcode(normalisedInput);
      scrollToTop();

      if (isValid) {
        setInputText("");
        searchBarcode(normalisedInput);
      } else {
        dispatch(setError(errorMessages.ONLY_NUMBERS));
      }
    }
  };

  const onFocus = () => {
    dispatch(setError(""))
    if (showBarcodeScanner) {
      dispatch(setShowBarcodeScanner(false));
    }
  }

  const handleResponse = useCallback(
    (response) => {
      const data = response?.data?.product;

      if (data && data.code !== "") {
        dispatch(setCurrentItem(data));
        dispatch(addToHistory(data));
      } else {
        dispatch(setError(errorMessages.BARCODE_NOT_FOUND));
      }
    },
    [dispatch]
  );

  const searchBarcode = (barcode: string) => {
    if (barcode !== "") {
      const itemInHistory = findItemInHistory(historicalData, barcode);
      scrollToTop();

      if (itemInHistory) {
        dispatch(setCurrentItem(itemInHistory));
      } else {
        let url = `${API_ENDPOINT}product/${barcode}/?fields=code,product_name,image_url,ingredients_text,brands,categories_tags,labels_tags,nutriments`;
        setLoading(true);
        dispatch(setError(''));
        axios(url)
          .then((response) => {
            return handleResponse(response)
          })
          .catch((e) => {
            const errorMessage = e?.response?.status === 404 ? errorMessages.BARCODE_NOT_FOUND : errorMessages.NETWORK_ERROR;
            dispatch(setError(errorMessage));
          })
          .finally(() => setLoading(false));
      }
    }
  }


  return (
    <>
      <Form>
        <Container>
          <SubTitle>Insert the barcode number:</SubTitle>
          <RowContainer isLoading={loading}>
            <ImageBox>
              {errorMsg ? (
                <>
                  <View key={errorMsg} animation={"rubberBand"} duration={1000}>
                    <Image source={require("../../assets/barcodeError.png")} />
                  </View>
                  <ErrorMessage>
                    {errorMsg}
                  </ErrorMessage>
                </>
              ) : (
                <Image source={require("../../assets/barcode.png")} />
              )}
            </ImageBox>
            <Camera inputRef={inputRef} scrollToTop={scrollToTop} />
            <InputContainer>
              <Input
                ref={inputRef}
                onFocus={onFocus}
                onChangeText={setInputText}
                value={inputText}
                onSubmitEditing={handleSubmit}
                keyboardType="numeric"
                textAlign="center"
              />
              <ZoomHandle />
            </InputContainer>
          </RowContainer>
        </Container>
      </Form>
      {showBarcodeScanner ? <BarcodeScanner searchBarcode={searchBarcode} /> : null}
    </>
  );
});

export default SearchForm;
