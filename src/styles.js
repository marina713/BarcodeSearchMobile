import styled from "styled-components/native";
import Constants from "expo-constants";
import { colors } from "./utils/colors";

export const AppContainer = styled.View`
  text-align: center;
  color: ${colors.black};
`;

export const Heading = styled.Text`
  color: ${colors.darkBlack};
  font-size: 35px;
  font-weight: 700;
`;

export const Header = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 20px;
  padding-top: ${Constants.statusBarHeight}px;
  height: 150px;
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
`;
