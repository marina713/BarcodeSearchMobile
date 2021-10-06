import styled from "styled-components/native";
import { colors } from "../../utils/colors";

export const Form = styled.View`
  padding-bottom: 20px;
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
  min-width: 50px;
  height: 50px;
  border: solid 4px ${colors.black};
  border-radius: 50px;
  padding: 0 10px;
`;

export const InputContainer = styled.View`
  position: relative;
  margin-top: 2px;
`;

export const ZoomHandle = styled.View`
  transform: rotate(135deg);
  background: ${colors.black};
  width: 4px;
  height: 22px;
  position: absolute;
  top: 37px;
  right: -4px;
`;

export const RowContainer = styled.View<any>`
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  ${(props) => (props.isLoading ? "opacity: 0.2" : null)}
`;

export const ImageBox = styled.View`
  flex-direction: column;
  margin-right: 20px;
`;

export const ErrorMessage = styled.Text`
  color: indianred;
`;

export const Image = styled.Image`
  height: 55px;
  width: 65px;
  align-self: center;
`;
