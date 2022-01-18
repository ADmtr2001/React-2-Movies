import styled, {css} from "styled-components";
import {setFlex} from "../../../styles/mixins/Mixins.styles";

interface WrapperProps {
  width?: string;
  hoverColor?: string;
  hoverBackground?: string;
}

export const Wrapper = styled.button<WrapperProps>`
  ${setFlex({justify: 'center', align: 'center'})};

  color: ${(props) => props.color ? props.color : '#FF4E4E'};
  background-color: transparent;

  font-size: 2.8rem;

  width: ${(props) => props.width ? props.width : '23rem'};
  height: 5rem;

  text-decoration: none;
  outline: none;
  border: 0.1rem solid ${(props) => props.color ? props.color : '#FF4E4E'};;
  border-radius: 0.3rem;

  transition: all linear .2s;

  :hover {
    background-color: ${(props) => props.hoverBackground ? props.hoverBackground : '#FF4E4E'};
    color: ${(props) => props.hoverColor ? props.hoverColor : 'white'};
  }
`;

