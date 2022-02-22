import styled, {css} from "styled-components";
import {setFlex} from "../../../styles/mixins/mixins.styles";

interface WrapperProps {
  width?: string;
  height?: string;
  hoverColor?: string;
  hoverBackground?: string;
}

export const Wrapper = styled.button<WrapperProps>`
  ${setFlex({justify: 'center', align: 'center'})};
  
  color: ${(props) => props.color ? props.color : props.theme.primaryFontColor};
  background-color: transparent;

  font-size: 2.8rem;

  width: ${(props) => props.width ? props.width : '23rem'};
  height: ${(props) => props.width ? props.height : '5rem'};

  text-decoration: none;
  outline: none;
  border: 0.2rem solid ${(props) => props.color ? props.color : props.theme.primaryFontColor};;
  border-radius: 0.3rem;

  transition: all linear .2s;

  :hover {
    background-color: ${(props) => props.hoverBackground ? props.hoverBackground : props.theme.primaryFontColor};
    color: ${(props) => props.hoverColor ? props.hoverColor : props.theme.backgroundUIColor};
  }
`;

