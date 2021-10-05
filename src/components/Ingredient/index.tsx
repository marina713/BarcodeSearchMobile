import React from "react";
import { ListItem, IngredientContainer } from "./styles";

export type Props = {
  ingredient: string,
};

const Ingredient = React.memo(({ ingredient }: Props) => ingredient ? (
  <IngredientContainer>
    <ListItem> {ingredient} </ListItem>
  </IngredientContainer>
)
  : null);

export default Ingredient;
