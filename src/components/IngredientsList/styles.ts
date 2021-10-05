import styled from "styled-components/native";
import { colors } from "../../utils/colors";

export const Container = styled.ul`
  text-align: center;
  list-style: none;
  padding-inline-start: 0;
  display: flex;
  flex-wrap: wrap;
  padding-left: 3px;
  margin-top: 13px;
`;

export const Label = styled.Text`
  color: ${colors.lightBlack};
  font-weight: 200;
  font-size: medium;
  width: 100%;
  margin-bottom: 5px;
  text-align: left;
`;
