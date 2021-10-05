import styled from "styled-components/native";
import { colors } from "../../utils/colors";

export const Form = styled.View`
  height: 10%;
  margin-bottom: 30px;
`;

export const Container = styled.View``;

export const SubTitle = styled.Text`
  color: ${colors.lightBlack};
  margin: 0 auto 15px;
  font-weight: 400;
  font-size: 18px;
`;

export const Input = styled.TextInput`
  color: ${colors.black};
  font-size: 15px;
  background: transparent;
  min-width: 40px;
  height: 40px;
  border: solid 4px ${colors.black};
  border-radius: 40px;
  padding: 0 8px;
`;

export const InputContainer = styled.View<any>`
  position: relative;
  ${(props) => (props.isLoading ? "opacity: 0.2" : null)}
`;

export const ZoomHandle = styled.View`
  transform: rotate(135deg);
  background: ${colors.black};
  width: 4px;
  height: 22px;
  position: absolute;
  top: 28px;
  right: -4px;
`;

export const RowContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
`;

export const ImageBox = styled.View`
  flex-direction: column;
`;

export const ErrorMessage = styled.Text`
  color: indianred;
  /* font-size: small; */
`;

export const Image = styled.Image<any>`
  height: 50px;
  align-self: center;
  margin: 0 10px;
  ${(props) => (props.error ? "fill: orangered;" : null)}/* ${(props) =>
    props.isLoading ? "filter: invert(0.9);" : null} */
`;
