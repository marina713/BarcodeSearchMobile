import styled from "styled-components/native";
import { colors } from "../../utils/colors";

export const ItemBox = styled.View`
  width: 100%;
  align-self: flex-start;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const RowContainer = styled.TouchableOpacity<any>`
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  border: 1px solid ${colors.lightGray};
  border-radius: 15px;
  /* filter: grayscale(1); */
  padding: 5px;
  /* line-height: 1; */
  margin: 5px 20px;
`;

export const Value = styled.Text`
  color: ${colors.darkBlack};
  /* font-size: medium; */
`;

export const ImgContainer = styled.View`
  align-self: flex-start;
  flex-direction: column;
  padding: 5px;
  justify-content: flex-start;
  height: 70px;
  width: 70px;
`;

export const Img = styled.Image`
  border-radius: 5px;
  align-self: center;
  max-height: 70px;
  max-width: 70px;
`;
