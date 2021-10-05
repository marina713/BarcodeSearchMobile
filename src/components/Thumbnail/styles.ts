import styled from "styled-components/native";
import { colors } from "../../utils/colors";

export const ItemBox = styled.View`
  width: 90%;
  max-width: 400px;
`;

export const RowContainer = styled.TouchableOpacity<any>`
  flex-direction: row;
  border: 1px solid
    ${(props) => (props.selected ? "#00bcd4" : colors.lightGray)};
  border-radius: 15px;
  padding: 5px;
  margin: 10px 0;
`;

export const ImgContainer = styled.View`
  margin-right: 10px;
  flex-direction: column;
  justify-content: flex-start;
  height: 70px;
  width: 70px;
`;

export const Img = styled.Image`
  border-radius: 15px;
  align-self: center;
  height: 70px;
  width: 70px;
`;
