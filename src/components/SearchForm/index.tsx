import React, { useEffect, useState } from "react";
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
import { submitSearch, setError } from "../../state/search/actions";
import { getBarcode, getCurrentItem } from "../../state/search/selectors";
import { useDispatch, useSelector } from "react-redux";

type Props = {
  loading: boolean,
  errorMsg: string,
};

const normaliseInput = (text: string) => text.replace(/\s/g, "");

const isValidBarcode = (text: string) => !!text.match(/^\d+$/);

const SearchForm = React.memo(({ loading, errorMsg }: Props) => {
  const dispatch = useDispatch();
  const barcode = useSelector(getBarcode);
  const currentItem = useSelector(getCurrentItem);
  const [inputText, setInputText] = useState(barcode);

  useEffect(() => {
    setInputText("");
  }, [currentItem]);

  const handleSubmit = (e: any) => {
    if (!loading) {
      const normalisedInput = normaliseInput(inputText);
      const isValid = isValidBarcode(normalisedInput);
      if (isValid) {
        dispatch(submitSearch(normalisedInput));
        setInputText("");
      } else {
        dispatch(setError("Only numbers allowed"));
      }
    }
  };
  console.log({ errorMsg })
  return (
    <Form>
      <Container>
        <SubTitle>Insert the barcode number:</SubTitle>
        <RowContainer>
          <ImageBox>
            {errorMsg ? (
              <>
                <Image source={require("../../assets/barcodeError.png")} />
                <ErrorMessage>
                  {errorMsg}
                </ErrorMessage>
              </>
            ) : (
              <Image source={require("../../assets/barcode.png")} isLoading={loading} />
            )}
          </ImageBox>

          <InputContainer isLoading={loading}>
            <Input
              onChangeText={(text) => { console.log({ text }); setInputText(text) }}
              value={inputText}
              // placeholder="e.g 2334561002236"
              onSubmitEditing={handleSubmit}
              keyboardType="numeric"
            />
            <ZoomHandle />
          </InputContainer>
        </RowContainer>
      </Container>
    </Form>
  );
});

export default SearchForm;
