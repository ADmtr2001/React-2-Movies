import styled from "styled-components";

import {setFlex} from "../../styles/mixins/Mixins.styles";

export const Wrapper = styled.div`
  height: 100%;
  
  ${setFlex({justify: 'center', align: 'center', direction: 'column'})};
  
  h1 {
    font-size: 5rem;
    
    text-align: center;
    
    margin-bottom: 3rem;
  }
`;