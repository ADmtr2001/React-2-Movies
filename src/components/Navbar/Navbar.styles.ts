import styled, {keyframes} from "styled-components";

import {setFlex} from "../../styles/mixins/Mixins.styles";

const blink = keyframes`
  0% {
    background-color: transparent;
    color: white
  }

  50% {
    background-color: white;
    color: black;
  }

  100% {
    background-color: transparent;
    color: white;
  }
`;

export const Wrapper = styled.nav`
  position: fixed;

  width: 10rem;
  height: 100vh;

  padding: 0 3rem;

  font-size: 1.8rem;

  background-color: #131313;

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

      button {
        font-size: 2.5rem;

        width: 40px;
        height: 40px;

        background-color: transparent;
        color: white;

        border: 2px solid white;
        border-radius: 50%;
        outline: none;

        ${setFlex({justify: 'flex-start', align: 'center'})};

        cursor: pointer;

        transition: all linear .2s;

        animation: ${blink} 2s linear infinite;

        :hover {
          background-color: white;
          color: #1A1F38;
        }
      }
    }
  }

`;