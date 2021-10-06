import React from "react";
import { View } from 'react-native';
import { ItemBox, RowContainer, ImgContainer, Img } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import ItemInfo from "../ItemInfo";
import { setCurrentItem } from "../../state/search/actions";
import { ProductItem } from "../../state/search/constants";
import { getCurrentItem } from "../../state/search/selectors";
import { trimSearch } from "../../utils/search";

type Props = {
  data: ProductItem;
  scrollToTop: () => void
}

const Thumbnail = React.memo(({ data, scrollToTop }: Props) => {
  const dispatch = useDispatch();
  const currentItem = useSelector(getCurrentItem);

  const onPress = () => {
    dispatch(setCurrentItem(data));
    scrollToTop();
  };
  const isSelected = currentItem.code === data.code;
  const ITEM_INFO = [
    { label: "Name", value: data.product_name },
    { label: "Code", value: data.code },
  ]

  return (
    <ItemBox>
      <RowContainer
        onPress={onPress}
        selected={isSelected}
      >
        <ImgContainer selected={isSelected}>
          {data.image_url ? (
            <Img source={{ uri: data.image_url }} />
          ) : isSelected ? (
            <Img source={require("../../assets/barcodeNoImg.png")} />
          ) : (
            <Img source={require("../../assets/barcodeNoImgGrey.png")} />
          )}
        </ImgContainer>

        <View>
          {ITEM_INFO.map(item =>
            <ItemInfo
              key={item.label}
              label={item.label}
              value={trimSearch(item.value || '', 20)}
              small
            />)}
        </View>
      </RowContainer>
    </ItemBox>

  );
});

export default Thumbnail;
