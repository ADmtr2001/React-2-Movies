import styled from "styled-components";

export const Wrapper = styled.div`
  font-size: 3rem;

  width: 50px;
  height: 50px;

  border: 2px solid white;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  transition: all linear .2s;

  :hover {
    background-color: white;
    color: #1A1F38;
  }
`;