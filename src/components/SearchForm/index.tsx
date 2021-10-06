import React, { useEffect, useState, useRef, useCallback } from "react";
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
import { submitSearch, setShowBarcodeScanner } from "../../state/search/actions";
import { setError } from "../../state/ui/actions";
import { getBarcode, getCurrentItem, getShowBarcodeScanner } from "../../state/search/selectors";
import { useDispatch, useSelector } from "react-redux";
import Camera from '../Camera';
import { getErrorMsg } from "../../state/ui/selectors";

type Props = {
  loading: boolean,
};

export const normaliseBarcode = (text: string) => text.replace(/\s/g, "");

export const isValidBarcode = (text: string) => !!text.match(/^\d+$/);

const SearchForm = React.memo(({ loading }: Props) => {
  const dispatch = useDispatch();
  const barcode = useSelector(getBarcode);
  const currentItem = useSelector(getCurrentItem);
  const showBarcodeScanner = useSelector(getShowBarcodeScanner);
  const errorMsg = useSelector(getErrorMsg);
  const [inputText, setInputText] = useState(barcode);
  const inputRef = useRef(null);

  useEffect(() => {
    setInputText("");
  }, [currentItem]);

  const handleSubmit = () => {
    if (!loading) {
      const normalisedInput = normaliseBarcode(inputText);
      const isValid = isValidBarcode(normalisedInput);
      if (isValid) {
        dispatch(submitSearch(normalisedInput));
        setInputText("");
      } else {
        dispatch(setError("Only numbers allowed"));
      }
    }
  };

  const onFocus = () => {
    if (showBarcodeScanner) {
      dispatch(setShowBarcodeScanner(false));
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
                  <Image source={require("../../assets/barcodeError.png")} />
                  <ErrorMessage>
                    {errorMsg}
                  </ErrorMessage>
                </>
              ) : (
                <Image source={require("../../assets/barcode.png")} />
              )}
            </ImageBox>
            <Camera inputRef={inputRef} />
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
    </>
  );
});

export default SearchForm;
