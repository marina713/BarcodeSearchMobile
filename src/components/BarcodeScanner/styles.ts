import styled from "styled-components/native";
import { colors } from "../../utils/colors";

export const Container = styled.View`
  width: 300px;
  height: 300px;
  margin: 10px auto 20px;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${colors.blue};
  height: 70px;
  border-radius: 35px;
  width: 90%;
  justify-content: center;
  align-items: center;
`;
export const Label = styled.Text`
  font-size: 23px;
  font-weight: 700;
  text-align: center;
  color: #fff;
`;
