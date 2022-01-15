import styled from "styled-components";
import {setFlex} from "../../../styles/mixins/Mixins.styles";

export const Wrapper = styled.button`
  position: fixed;
  bottom: 3rem;
  right: 3rem;

  background-color: transparent;
  color: #FF4E4E;

  font-size: 4rem;

  ${setFlex({justify: 'center', align: 'center'})}

  width: 5rem;
  height: 5rem;

  border: 0.2rem solid #FF4E4E;
  border-radius: 50%;

  transition: all linear .2s;

  :hover {
    background-color: #FF4E4E;
    color: white;
  }
`;