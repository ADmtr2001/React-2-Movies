import styled from "styled-components";

import {setFlex} from "../../styles/mixins/mixins.styles";

export const Wrapper = styled.div`
  .active-link {
    background-color: white;
    color: ${(props) => props.theme.backgroundUIColor}
  }

  a {
    font-size: 2.5rem;

    width: 40px;
    height: 40px;

    border: 2px solid white;
    border-radius: 50%;
    outline: none;

    ${setFlex({justify: 'center', align: 'center'})};

    cursor: pointer;

    transition: all linear .2s;

    :hover {
      background-color: white;
      color: ${(props) => props.theme.backgroundUIColor};
    }
  }

  @media (min-width: 1000px) {
      a {
          :hover {
              background-color: white;
              color: ${(props) => props.theme.backgroundUIColor};
          }
      }
  }
`;