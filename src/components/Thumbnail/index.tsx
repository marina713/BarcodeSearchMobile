import React from "react";
import { View } from 'react-native';
import { ItemBox, RowContainer, ImgContainer, Img } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import ItemInfo from "../ItemInfo";
//import barcodeNoImg from "../../assets/barcodeNoImg.svg";
import { setCurrentItem } from "../../state/search/actions";
import { ProductItem } from "../../state/search/constants";
import { getCurrentItem } from "../../state/search/selectors";

type Props = {
  data: ProductItem,
}

const Thumbnail = React.memo(({ data }: Props) => {
  const dispatch = useDispatch();
  const currentItem = useSelector(getCurrentItem);

  const handleClick = () => {
    dispatch(setCurrentItem(data));
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };
  const isSelected = currentItem.code === data.code;
  const ITEM_INFO = [
    { label: "Name", value: data.product_name },
    { label: "Code", value: data.code },
  ]
  return (
    <ItemBox>
      <RowContainer
        onPress={handleClick}
        selected={isSelected}
      >
        <ImgContainer>
          {data.image_url ? (
            <Img source={{ uri: data.image_url }} />
          ) : (
            <Img source={{ uri: barcodeNoImg }} />
          )}
        </ImgContainer>

        <View>
          {ITEM_INFO.map(item =>
            <ItemInfo
              key={item.label}
              label={item.label}
              value={item.value}
              small
            />)}
        </View>
      </RowContainer>
    </ItemBox>

  );
});

export default Thumbnail;
