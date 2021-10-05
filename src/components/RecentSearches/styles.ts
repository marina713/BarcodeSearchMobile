import styled from "styled-components/native";

export const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 900px;
`;

export const Container = styled.View`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-self: flex-start;

  /* @media only screen and (max-width: 830px) {
    width: 100%;
  } */
`;
