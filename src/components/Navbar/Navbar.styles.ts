import styled, {keyframes} from "styled-components";

import {setFlex} from "../../styles/mixins/mixins.styles";

interface WrapperProps {
  visible: boolean;
}

export const Wrapper = styled.nav<WrapperProps>`
  position: fixed;

  z-index: 500;

  width: 10rem;
  height: 100vh;

  padding: 0 3rem;

  font-size: 1.8rem;

  background-color: ${(props) => props.theme.backgroundUIColor};

  transition: transform linear .5s;

  .navbar-container {
    margin-top: 2rem;

    height: 100%;

    ${setFlex({justify: 'flex-start', align: 'center', direction: 'column'})};
    gap: 3rem 0;

    img {
      width: 150%;

      color: white;

      cursor: pointer;
    }

    h2 {
      a {
        outline: none;

        font-size: 2.5rem;

        ${setFlex({justify: 'center', align: 'center'})};

        cursor: pointer;
      }
    }

    .login-container {
      margin-top: auto;
      margin-bottom: 5rem;

      ${setFlex({justify: 'flex-start', align: 'center', direction: 'column'})};
      gap: 3rem 0;
    }
  }

  .close {
    background-color: ${(props) => props.theme.backgroundUIColor};
    width: 6rem;
    height: 6rem;

    position: fixed;
    top: 50%;
    right: 10rem;

    border-bottom-left-radius: 50%;
    border-top-left-radius: 50%;

    ${setFlex({justify: 'center', align: 'center'})};

    font-size: 3rem;

    transform: translateY(-50%);
  }

  @media (min-width: 1000px) {
    .close {
      display: none;
    }
  }
  
  @media (max-width: 1000px) {
    right: 0;

    transform: ${(props) => props.visible ? 'translateX(0)' : 'translateX(20rem)'};
  }
`;