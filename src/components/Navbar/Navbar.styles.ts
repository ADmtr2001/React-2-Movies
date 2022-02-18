import styled, {keyframes} from "styled-components";

import {setFlex} from "../../styles/mixins/Mixins.styles";

export const Wrapper = styled.nav`
  position: fixed;

  width: 10rem;
  height: 100vh;

  padding: 0 3rem;

  font-size: 1.8rem;

  background-color: ${(props) => props.theme.backgroundUIColor};

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

`;