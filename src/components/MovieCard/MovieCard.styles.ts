import styled from "styled-components";

import {Link} from "react-router-dom";

import {setFlex} from "../../styles/mixins/Mixins.styles";

export const Wrapper = styled(Link)`
  display: inline-block;

  background-color: #131313;

  width: 23rem;
  height: 40rem;

  margin-left: 1.2rem;

  cursor: pointer;

  .image-container {
    width: 100%;
    height: 75%;

    position: relative;

    .hover-container {
      font-size: 4rem;

      ${setFlex({justify: 'center', align: 'center'})};

      width: 100%;
      height: 100%;

      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;

      background-color: rgba(0, 0, 0, .5);

      opacity: 0;
      transition: opacity linear .2s;
    }

    img {
      width: 100%;
      height: 100%;
    }
  }

  .description-container {
    padding: .75rem 1rem;

    h3 {
      font-size: 2rem;
      margin-bottom: .5rem;
    }

    p {
      font-size: 1.5rem;
    }
  }

  &:hover {
    .hover-container {
      opacity: 1;
    }
  }
`;