import styled from "styled-components";
import {setFlex} from "../../styles/mixins/Mixins.styles";

export const Wrapper = styled.div`
  margin-bottom: 5rem;
  
  ${setFlex({direction: 'column', align: 'center'})};

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