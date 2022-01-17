import styled from "styled-components";
import {setFlex} from "../../../styles/mixins/Mixins.styles";

export const Wrapper = styled.button`
  ${setFlex({justify: 'center', align: 'center'})};

  color: #FF4E4E;
  background-color: transparent;

  font-size: 2.8rem;

  width: 23rem;
  height: 5rem;

  text-decoration: none;
  outline: none;
  border: 0.1rem solid #FF4E4E;
  border-radius: 0.3rem;

  transition: all linear .2s;

  :hover {
    background-color: #FF4E4E;
    color: white;
  }
`;