import styled from "styled-components";

export const Wrapper = styled.div`
  font-size: 2rem;
  
  width: 35px;
  height: 35px;
  
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
`