import React, { useCallback, useRef } from "react";
import { useSelector } from "react-redux";

import SearchForm from "../components/SearchForm";
import Item from "../components/Item";
import RecentSearches from "../components/RecentSearches";
import {
  getCurrentItem,
  getHistoricalData,
} from "../state/search/selectors";
import { FlexContainer } from "./styles"


const Home = () => {
  const scrollRef = useRef(null);
  const currentItem = useSelector(getCurrentItem);
  const historicalData = useSelector(getHistoricalData);

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
      <SearchForm scrollToTop={scrollToTop} />
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
