import styled from "styled-components";

import {setFlex} from "../../styles/mixins/Mixins.styles";

export const Wrapper = styled.div`
 ${setFlex({direction: 'column', align: 'center'})};
  
  h1 {
    font-size: 4rem;
    margin: 2rem 0;
  }
`;