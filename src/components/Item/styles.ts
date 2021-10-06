import styled from "styled-components/native";
import { colors } from "../../utils/colors";

export const ItemBox = styled.View`
  justify-content: center;
  flex-direction: column;
  align-items: center;
  align-self: center;
  padding: 10px;
  max-width: 700px;
`;

export const RowContainer = styled.View`
  flex-direction: column;
  justify-content: center;
  border: 1px solid ${colors.blue};
  border-radius: 15px;
  padding: 10px;
  margin: 10px 20px 20px;
  max-width: 90%;
  background-color: white;
`;

export const Value = styled.Text`
  color: ${colors.darkBlack};
  font-size: 12px;
`;

export const Title = styled.Text`
  color: ${colors.darkBlack};
  font-size: 28px;
  font-weight: 700;
  text-align: center;
`;

export const ImgContainer = styled.View`
  flex-direction: column;
  padding: 10px;
  align-self: center;
`;

export const Img = styled.Image`
  border-radius: 15px;
  margin-right: 5px;
  align-self: center;
  width: 140px;
  height: 140px;
`;
