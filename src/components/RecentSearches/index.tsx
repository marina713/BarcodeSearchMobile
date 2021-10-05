import React from "react";
import { Text } from "react-native";
import { useSelector } from "react-redux";
import {
  getHistoricalData
} from "../../state/search/selectors";
import { ProductItem } from "../../state/search/constants";
import Thumbnail from "../Thumbnail";
import { Wrapper, Container, Title } from "./styles"

type Props = { scrollToTop: () => void };

const RecentSearches = React.memo(({ scrollToTop }: Props) => {
  const historicalData = useSelector(getHistoricalData);

  return historicalData.length > 0 ? (
    <Container>
      <Title>Recent searches</Title>
      <Wrapper>
        {historicalData.map((item: ProductItem) => (
          <Thumbnail data={item} key={item.code} scrollToTop={scrollToTop} />
        ))}
      </Wrapper>
    </Container>
  ) : null;
});

export default RecentSearches;
