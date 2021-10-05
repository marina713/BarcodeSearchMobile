import styled from "styled-components/native";
import { colors } from "../../utils/colors";

export const ItemBox = styled.View`
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const RowContainer = styled.View`
  flex-direction: column;
  justify-content: center;
  border: 1px solid #00bcd4;
  border-radius: 15px;
  padding: 10px;
  margin: 5px 20px;
  /* line-height: 1.5; */
`;

export const Value = styled.Text`
  color: ${colors.darkBlack};
  font-size: 12px;
`;

export const ImgContainer = styled.View`
  flex-direction: column;
  padding: 10px;
  justify-content: flex-start;
  max-height: 150px;
  max-width: 150px;
  align-self: center;
`;

export const Img = styled.Image`
  border-radius: 15px;
  margin-right: 5px;
  align-self: center;
  max-height: 150px;
  max-width: 150px;
`;
