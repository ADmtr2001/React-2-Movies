import styled from "styled-components";

import {setFlex} from "../../../styles/mixins/Mixins.styles";

export const Wrapper = styled.button`
  position: fixed;
  bottom: 3rem;
  right: 3rem;

  background-color: transparent;
  color: white;

  font-size: 3rem;

  ${setFlex({justify: 'center', align: 'center'})}

  width: 4rem;
  height: 4rem;

  border: 0.2rem solid white;
  border-radius: 50%;

  transition: all linear .2s;

  :hover {
    background-color: white;
    color: black;
  }
`;