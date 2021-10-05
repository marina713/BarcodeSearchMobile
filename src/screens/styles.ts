import styled from "styled-components/native";

export const FlexContainer = styled.View<any>`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
  padding-bottom: 40px;

  /* @media only screen and (max-width: 830px) {
    flex-direction: column;
  } */
`;
