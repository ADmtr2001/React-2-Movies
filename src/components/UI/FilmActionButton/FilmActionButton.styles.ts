import styled from "styled-components";

import {setFlex} from "../../../styles/mixins/Mixins.styles";

export const Wrapper = styled.button`
  width: 4.5rem;
  height: 4.5rem;
  
  ${setFlex({justify: 'center', align: 'center'})};
  
  font-size: 3.5rem;
  
  color: white;
  background-color: transparent;
  
  border: 0.2rem solid white;
  
  transition: all linear 0.25s;
  
  :hover {
    background-color: white;
    color: black
  }
  
  &.active {
    background-color: white;
    color: black
  }
`;