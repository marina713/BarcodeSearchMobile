import styled from "styled-components/native";
import { colors } from "./utils/colors";

export const AppContainer = styled.View`
  text-align: center;
  min-width: 60%;
  color: ${colors.black};
  /* 
  @media only screen and (min-width: 830px) {
    .search {
      width: max-content;
    }
  } */
`;

export const Heading = styled.Text`
  color: ${colors.darkBlack};
`;

export const Header = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
`;

export const HeaderContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
`;
