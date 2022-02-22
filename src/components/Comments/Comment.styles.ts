import styled from "styled-components";

import {setFlex} from "../../styles/mixins/mixins.styles";

export const Wrapper = styled.div`
  ${setFlex({})};

  width: 95%;
  
  color: black;

  font-size: 1.7rem;

  margin: 2rem 0;

  .user {
    ${setFlex({direction: 'column', align: 'center', justify: "space-around"})}

    width: 14rem;
    height: 14rem;
    
    padding: .5rem;
    
    text-align: center;
    
    color: ${(props) => props.theme.primaryFontColor};

    img {
      display: block;
      
      height: 8rem;
      width: 8rem;
      
      border-radius: 100%;
    }

    p {
      height: 3.5rem;
      
      overflow: hidden;
    }
  }

  .text {
    background-color: white;
    
    width: 100%;
    
    word-break: break-all;
    
    padding: 1.5rem 4rem 1.5rem 1.5rem;
    
    position: relative;

    .remove-button {
      ${setFlex({justify: "center", align: "center"})};

      position: absolute;
      top: .5rem;
      right: .5rem;
      
      width: 3rem;
      height: 3rem;
      
      font-size: 2rem;
      
      color: ${(props) => props.theme.backgroundUIColor};
      
      border: 2px solid ${(props) => props.theme.backgroundUIColor};
      
      transition: all linear .2s;
      
      cursor: pointer;

      &:hover {
        background-color: ${(props) => props.theme.backgroundUIColor};
        color:  ${(props) => props.theme.primaryFontColor};
      }
    }
  }
`;