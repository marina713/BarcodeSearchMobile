import styled from "styled-components/native";
import { colors } from "../../utils/colors";
import { onHoverHighlight } from "../../utils/animations";

export const Form = styled.View`
  height: 10%;
  background-color: blueviolet;
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
  width: 30px;
  height: 30px;
  border: solid 3px ${colors.black};
  border-radius: 35px;
`;

export const InputContainer = styled.View<any>`
  position: relative;
  ${(props) => (props.isLoading ? "opacity: 0.2" : null)}

  &:after {
    content: "";
    background: ${colors.black};
    width: 4px;
    height: 20px;
    position: absolute;
    top: 27px;
    transform: rotate(135deg);
  }
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
  /* ${(props) => (props.isLoading ? "filter: invert(0.9);" : null)} */
  ${(props) => (props.error ? "fill: orangered;" : null)}
`;
