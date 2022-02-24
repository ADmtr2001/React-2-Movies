import styled from "styled-components";

import {setFlex} from "../../styles/mixins/mixins.styles";

export const Wrapper = styled.div`
  ${setFlex({direction: 'column', align: 'center'})};

  background-color: ${(props) => props.theme.backgroundMainPart};
  
  padding-bottom: 2rem;
  
  height: 100%;

  h1 {
    font-size: 4rem;
    
    margin: 2rem 0;
  }

  @media (max-width: 400px) {
    h1 {
      font-size: 3.25rem;
    }
  }
`;