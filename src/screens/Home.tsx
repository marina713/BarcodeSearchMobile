import React, { useState, useEffect, useCallback, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import SearchForm from "../components/SearchForm";
import Item from "../components/Item";
import RecentSearches from "../components/RecentSearches";
import {
  setCurrentItem,
  addToHistory,
} from "../state/search/actions";
import { setError } from "../state/ui/actions";
import { ProductItem } from "../state/search/constants";
import {
  getBarcode,
  getCurrentItem,
  getHistoricalData,
  getShowBarcodeScanner,
} from "../state/search/selectors";
import { getErrorMsg } from "../state/ui/selectors";
import { API_ENDPOINT } from '../constants';
import { FlexContainer } from "./styles"
import BarcodeScanner from "../components/BarcodeScanner";

const findItemInHistory = (historicalData: ProductItem[], barcode: string) =>
  historicalData.find((item) => item.code === barcode);

const Home = () => {
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);
  const barcode = useSelector(getBarcode);
  const currentItem = useSelector(getCurrentItem);
  const historicalData = useSelector(getHistoricalData);
  const errorMsg = useSelector(getErrorMsg);
  const showBarcodeScanner = useSelector(getShowBarcodeScanner);

  const dispatch = useDispatch();

  //   const code = "3263855093192";
  //   const code = "041164000314"; no foto
  //   const code = "8410179012018";
  //   const code = "8437020652940";
  //   const code = "20425555";

  const handleResponse = useCallback(
    (response) => {
      const data = response?.data?.product;

      if (data && data.code !== "") {
        dispatch(setCurrentItem(data));
        dispatch(addToHistory(data));
      } else {
        dispatch(setError("No results found"));
      }
    },
    [dispatch]
  );

  useEffect(() => {
    if (barcode !== "") {
      const itemInHistory = findItemInHistory(historicalData, barcode);
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
            const errorMessage = e?.response?.status === 404 ? "No results found" : "Network Error";
            dispatch(setError(errorMessage));
          })
          .finally(() => setLoading(false));
      }
    }
  }, [barcode, historicalData, dispatch, handleResponse]);


  const scrollToTop = useCallback(() => {
    setTimeout(() => {
      // @ts-ignore
      scrollRef.current?.scrollTo({
        y: 0,
        animated: true,
      });
    }, 0);

  }, [scrollRef]);

  return (
    <>
      <SearchForm loading={loading} />
      {showBarcodeScanner ? <BarcodeScanner /> : null}
      {historicalData ? (
        <FlexContainer ref={scrollRef}>
          <Item data={currentItem} />
          <RecentSearches scrollToTop={scrollToTop} />
        </FlexContainer>
      ) : null}
    </>
  );
};

export default Home;
