import styled from "styled-components";
import {setFlex} from "../../styles/mixins/Mixins.styles";

export const Wrapper = styled.div`
  background-color: ${(props) => props.theme.backgroundUIColor};
  
  ${setFlex({direction: 'column', align: 'center'})};
  
  width: 90%;
`;