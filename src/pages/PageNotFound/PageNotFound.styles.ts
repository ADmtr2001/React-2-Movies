import styled from "styled-components";

import {setFlex} from "../../styles/mixins/Mixins.styles";

export const Wrapper = styled.div`
  ${setFlex({justify: 'center', align: 'center', direction: 'column'})};

  background-color: ${(props) => props.theme.backgroundMainPart};
  padding-bottom: 2rem;
  height: 100%;
  
  h1 {
    font-size: 5rem;
    
    text-align: center;
    
    margin-bottom: 3rem;
  }
`;