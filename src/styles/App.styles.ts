import styled from "styled-components";

import {correctPosition} from "./mixins/Mixins.styles";

export const Wrapper = styled.div`
  max-width: 1420px;
  padding: 0 10px;
  margin: 0 auto;
  height: 100%;

  .colons {
      min-height: 100vh;
      display: flex;
  }

  .content {
    ${correctPosition}
  }
`