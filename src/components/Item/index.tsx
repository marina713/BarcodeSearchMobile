import React from "react";
import { View } from 'react-native';
import { ItemBox, RowContainer, ImgContainer, Img, Title } from "./styles";
import Nutriments from "./Nutriments";
import ItemInfo from "../ItemInfo";
import IngredientsList from "../IngredientsList";
import { ProductItem } from "../../state/search/constants";

type Props = {
  data: ProductItem,
}

const Item = React.memo(({ data }: Props) => {

  const ITEM_INFO = [
    { label: "Name", value: data.product_name },
    { label: "Brand", value: data.brands },
    { label: "Code", value: data.code },
  ]

  return (
    <ItemBox>
      {data.code ? (
        <>
          <Title>{data.product_name}</Title>
          <RowContainer>
            <ImgContainer>
              {data.image_url ? (
                <Img source={{ uri: data.image_url }} resizeMode="contain" />
              ) : null}
            </ImgContainer>
            <View>
              {ITEM_INFO.map(item => <ItemInfo
                key={item.label}
                label={item.label}
                value={item.value}
              />)}

              {data.nutriments ? <Nutriments /> : null}

              {data.ingredients_text ? (
                <IngredientsList
                  ingredientsList={data.ingredients_text.split(",")}
                />
              ) : null}
            </View>
          </RowContainer>
        </>
      ) : null}
    </ItemBox>
  );
});

export default Item;
