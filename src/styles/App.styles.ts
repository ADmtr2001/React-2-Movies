import styled from "styled-components";

import {correctPosition, setFlex} from "./mixins/mixins.styles";

export const Wrapper = styled.div`
  & > .container {
    max-width: 1420px;
    height: 100%;
      
    margin: 0 auto;
  }

  .colons {
    min-height: 100vh;

    ${setFlex({})};
  }

  .content {
    ${correctPosition}
  }

  @media (min-width: 1000px) {
    & > .container {
        padding: 0 10px;
    }
  }

  @media (max-width: 1000px) {
    .content {
      margin-left: 0;
      width: 100%
    }
  }
`