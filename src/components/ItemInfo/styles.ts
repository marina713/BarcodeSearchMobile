import styled from "styled-components/native";
import { colors } from "../../utils/colors";

export const Label = styled.Text<any>`
  color: ${colors.lightBlack};
  font-weight: 200;
  font-size: ${(props) => (props.small ? "15px" : "20px")};
`;

export const RowContainer = styled.View`
  justify-content: center;
  align-items: baseline;
  margin: 3px;
  flex-direction: row;
  width: 100%;
  justify-content: flex-start;
`;

export const FirstCol = styled.View<any>`
  width: ${(props) => (props.small ? "45px" : "80px")};
  text-align: left;
  align-self: flex-start;
`;

export const SecondCol = styled.View<any>`
  margin-left: ${(props) => (props.small ? "1px" : "10px")};
  text-align: left;
  font-weight: 600;
  flex-shrink: 1;
`;

export const Value = styled.Text<any>`
  color: ${colors.darkBlack};
  font-size: ${(props) => (props.small ? "15px" : "20px")};
`;
