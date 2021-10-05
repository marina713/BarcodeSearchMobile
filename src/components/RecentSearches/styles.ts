import styled from "styled-components/native";
import { colors } from "../../utils/colors";

export const Wrapper = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 10px;
`;

export const Container = styled.View`
  width: 100%;
  flex-direction: column;
  align-self: flex-start;
`;

export const Title = styled.Text`
  color: ${colors.darkBlack};
  font-size: 23px;
  font-weight: 500;
  text-align: center;
`;
