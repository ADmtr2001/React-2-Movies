import styled from "styled-components";

import {correctPosition, setFlex} from "./mixins/mixins.styles";

export const Wrapper = styled.div`
  & > .container {
    max-width: 1420px;
    height: 100%;

    padding: 0 10px;
    margin: 0 auto;
  }

  .colons {
    min-height: 100vh;

    ${setFlex({})};
  }

  .content {
    ${correctPosition}
  }
`