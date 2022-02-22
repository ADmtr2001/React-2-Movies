import styled from "styled-components";

import {setFlex} from "../../styles/mixins/mixins.styles";

export const Wrapper = styled.div`
  ${setFlex({align: 'center', direction: 'column'})};

  width: 100%;
  height: 100%;
  
  margin-bottom: 4rem;
  padding-bottom: 2rem;

  background-color: ${(props) => props.theme.backgroundMainPart};
`;