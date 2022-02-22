import styled from "styled-components";
import {setFlex} from "../../styles/mixins/Mixins.styles";

export const Wrapper = styled.div`
  margin-bottom: 5rem;
  
  ${setFlex({direction: 'column', align: 'center'})};

  background-color: ${(props) => props.theme.backgroundMainPart};
  padding-bottom: 2rem;
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