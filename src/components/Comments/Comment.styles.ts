import styled from "styled-components";
import {setFlex} from "../../styles/mixins/Mixins.styles";

export const Wrapper = styled.div`
  width: 95%;
  
  ${setFlex({})};
  
  color: black;
  
  font-size: 1.7rem;
  
  margin: 2rem 0;
  
  .user {
    width: 12rem;
    height: 12rem;
    background-color: red;
    padding: .5rem;
    text-align: center;
    
    ${setFlex({direction: 'column', align: 'center', justify: "space-around"})}
    
    img {
      display: block;
      height: 8rem;
      width: 8rem;
      background-color: black;
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
    padding: 1.5rem;
  }
`;