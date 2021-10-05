import styled from "styled-components/native";
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
  justify-content: center;
  padding: 7% 0;
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
`;
