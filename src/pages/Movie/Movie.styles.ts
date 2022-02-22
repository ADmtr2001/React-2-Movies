import styled from "styled-components";
import {setFlex} from "../../styles/mixins/Mixins.styles";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  
  margin-bottom: 4rem;

  background-color: ${(props) => props.theme.backgroundMainPart};
  padding-bottom: 2rem;
  
  ${setFlex({align: 'center', direction: 'column'})};
`;