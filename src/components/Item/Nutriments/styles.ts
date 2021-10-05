import styled from "styled-components/native";
import { colors } from "../../../utils/colors";

export const Label = styled.Text<any>`
  color: ${colors.lightBlack};
  font-weight: 200;
  text-align: left;
  /* font-size: ${(props) => (props.small ? "small" : "medium")}; */
  padding-left: ${(props) => (props.subCategory ? "15px" : null)};
`;

export const Wrapper = styled.View`
  justify-content: center;
  padding-left: 3px;
  padding-right: 30px;
  flex-direction: column;
  margin-top: 13px;
`;

export const NutrimentWrapper = styled.View<any>`
  flex-direction: row;
  justify-content: space-between;
  /* font-size: smaller; */
  padding-right: 20px;
  padding-left: 5px;
`;
