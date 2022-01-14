import styled from "styled-components";

import {setFlex} from "../../../styles/mixins/Mixins.styles";

export const Wrapper = styled.form`
  ${setFlex({justify: 'center', align: 'center'})};

  margin: 0 2rem;
  
  button {
    background-color: transparent;
    border: none;
    color: white;
    
    cursor: pointer;
    margin-left: 1rem;

    ${setFlex({justify: 'center', align: 'center'})};
  }
`;