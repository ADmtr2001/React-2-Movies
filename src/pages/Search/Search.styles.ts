import styled from "styled-components";

import {setFlex} from "../../styles/mixins/mixins.styles";

export const Wrapper = styled.div`
  ${setFlex({direction: 'column', align: 'center'})};

  margin-bottom: 5rem;
  padding-bottom: 2rem;

  background-color: ${(props) => props.theme.backgroundMainPart};
  
  height: 100%;

  h1 {
    font-size: 4rem;
    
    margin: 2rem 0;
  }
  

  form {
    margin-top: 1.5rem;
  }

  .error-container {
    text-align: center;
    font-size: 1.5rem;
  }
`;