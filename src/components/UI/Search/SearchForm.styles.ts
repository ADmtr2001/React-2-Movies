import styled from "styled-components";

import {setFlex} from "../../../styles/mixins/Mixins.styles";

export const Wrapper = styled.form`
  ${setFlex({justify: 'center', align: 'center'})};

  margin: 2rem 2rem;
  
  font-size: 1.5rem;
  
  .container {
    position: relative;

    width: 50rem;
    min-width: 18rem;
    height: 3rem;
  }

  input {
    width: 100%;
    height: 100%;
    
    padding: .3rem 3rem .3rem .3rem;

    position: relative;

    border: 2px solid #131313;
    
    font-family: inherit;
  }

  button {
    background-color: transparent;
    border: none;
    color: #131313;

    cursor: pointer;
    
    margin-left: 1rem;
    
    position: absolute;
    top: 50%;
    right: .2rem;
    transform: translateY(-50%);

    ${setFlex({justify: 'center', align: 'center'})};

    svg {
      font-size: 2rem;
    }
  }
`;