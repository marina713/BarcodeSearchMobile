import styled from "styled-components/native";
import { colors } from "../../utils/colors";

export const Label = styled.Text<any>`
  color: ${colors.lightBlack};
  font-weight: 200;
  font-size: ${(props) => (props.small ? "x-small" : "medium")};
`;

export const RowContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: baseline;
  font-size: inherit;
  margin: 3px;
  flex-direction: row;
`;

export const Value = styled.Text<any>`
  color: ${colors.darkBlack};
  font-size: ${(props) => (props.small ? "x-small" : "medium")};
`;

export const FirstCol = styled.View<any>`
  width: ${(props) => (props.small ? "30px" : "80px")};
  text-align: start;
  overflow-wrap: normal;
`;

export const SecondCol = styled.View<any>`
  margin-left: ${(props) => (props.small ? "1px" : "10px")};
  width: 100%;
  text-align: start;
  font-weight: 600;
`;
