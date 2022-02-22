import styled from "styled-components";

import {setFlex} from "../../../styles/mixins/mixins.styles";

export const Wrapper = styled.div`
  a {
    ${setFlex({justify: 'center', align: 'center'})};
    
    background-color: transparent;
    
    font-size: 2.8rem;
      
    width: 23rem;
    height: 5rem;

    text-decoration: none;
      
    outline: none;
    border: 0.2rem solid ${(props) => props.theme.primaryFontColor};
    border-radius: 0.3rem;

    transition: all linear .2s;
    
    :hover {
      background-color: ${(props) => props.theme.primaryFontColor};
      color: ${(props) => props.theme.backgroundUIColor};
    }
  }
`;