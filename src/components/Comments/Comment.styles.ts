import styled from "styled-components";
import {setFlex} from "../../styles/mixins/Mixins.styles";

export const Wrapper = styled.div`
  width: 95%;

  ${setFlex({})};

  color: black;

  font-size: 1.7rem;

  margin: 2rem 0;

  .user {
    width: 14rem;
    height: 14rem;
    background-color: red;
    padding: .5rem;
    text-align: center;

    ${setFlex({direction: 'column', align: 'center', justify: "space-around"})}
    img {
      display: block;
      height: 8rem;
      width: 8rem;
      background-color: black;
      border-radius: 100%;
    }

    p {
      height: 3.5rem;
      overflow: hidden;
    }
  }

  .text {
    background-color: white;
    width: 100%;
    overflow: hidden;
    padding: 1.5rem;
    position: relative;

    .remove-button {
      position: absolute;
      width: 3rem;
      height: 3rem;
      ${setFlex({justify: "center", align: "center"})};
      font-size: 2rem;
      top: .5rem;
      right: .5rem;
      cursor: pointer;
      color: ${(props) => props.theme.backgroundUIColor};
      border: 2px solid ${(props) => props.theme.backgroundUIColor};
      transition: all linear .2s;

      &:hover {
        background-color: ${(props) => props.theme.backgroundUIColor};
        color:  ${(props) => props.theme.primaryFontColor};
      }
    }
  }
`;