import styled from "styled-components";

import {setFlex} from "../../styles/mixins/Mixins.styles";

export const Wrapper = styled.footer`
  color: ${(props) => props.theme.footerFontColor};
  background-color: ${(props) => props.theme.backgroundUIColor};
  
  ${setFlex({justify: "space-around"})};
  
  margin-top: auto;
  margin-left: 10rem;
  padding: 0 3rem;

  .colon {
    margin-top: 2rem;
    margin-bottom: 2rem;
    
    li {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      transition: color linear 0.2s;
    
      :hover {
        color: white;
      }
    }
  }
`;