import styled from "styled-components";

import {setFlex} from "../../../styles/mixins/Mixins.styles";

export const Wrapper = styled.div`
  a {
    ${setFlex({justify: 'center', align: 'center'})};
    
    color: white;
    background-color: transparent;
    
    font-size: 2.8rem;
      
    width: 23rem;
    height: 5rem;

    text-decoration: none;
    outline: none;
    border: 0.2rem solid white;
    border-radius: 0.3rem;

    transition: all linear .2s;
    
    :hover {
      background-color: white;
      color: black;
    }
  }
`;