import styled from "styled-components";
import {setFlex} from "../../../styles/mixins/Mixins.styles";

export const Wrapper = styled.div`
  ${setFlex({justify: 'center'})};
  gap: 2rem;
  flex-wrap: wrap;
  
  width: fit-content;
`;