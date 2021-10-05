import styled from "styled-components/native";
import { colors } from "../../../utils/colors";

export const Label = styled.Text<any>`
  color: ${colors.lightBlack};
  font-weight: 200;
  text-align: left;
  font-size: 17px;
  line-height: 25px;
  padding-left: ${(props) => (props.subCategory ? "15px" : "0")};
`;
export const Title = styled.Text<any>`
  color: ${colors.lightBlack};
  font-weight: 200;
  text-align: left;
  font-size: 20px;
  line-height: 33px;
`;

export const LabelValue = styled.Text<any>`
  font-size: 17px;
`;

export const Wrapper = styled.View`
  justify-content: center;
  padding-left: 3px;
  padding-right: 5px;
  flex-direction: column;
  margin-top: 13px;
`;

export const NutrimentWrapper = styled.View<any>`
  flex-direction: row;
  justify-content: space-between;
  padding-right: 5px;
  padding-left: 5px;
`;
