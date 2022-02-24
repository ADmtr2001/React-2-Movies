import styled from "styled-components";

import {setFlex} from "../../styles/mixins/mixins.styles";

export const Wrapper = styled.footer`
  color: ${(props) => props.theme.footerFontColor};
  background-color: ${(props) => props.theme.backgroundUIColor};
  
  ${setFlex({justify: "space-around"})};
  flex-wrap: wrap;
  
  margin-top: auto;
  margin-left: 10rem;
  padding: 0 3rem;

  .colon {
    margin-top: 2rem;
    margin-bottom: 2rem;
    
    width: 15rem;
    
    li {
      font-size: 1.5rem;
      
      margin-bottom: 1rem;
      
      transition: color linear 0.2s;
    }
  }

  @media (min-width: 1000px) {
      li {
        :hover {
          color: white;
        }
      }
  }
  
  @media (max-width: 1000px) {
    margin-left: 0;
    
    .colon {
      li {
        font-size: 1.75rem;
        
        margin-bottom: 2rem;
      }
    }
  }

  @media (max-width: 850px) {

    .colon {
      width: 50%;

      margin-bottom: 0;
      
      text-align: center;
    }
  }

  @media (max-width:500px) {
    .colon {
      padding: 0.25rem;
      
      li {
        font-size: 1.5rem;
      }
    }
  }
  
  @media (max-width: 400px) {
    padding-bottom: 5rem;
  }
`;