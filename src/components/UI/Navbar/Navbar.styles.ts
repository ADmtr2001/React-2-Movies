import styled from "styled-components";

export const Wrapper = styled.nav`
  width: 100%;
  height: 5rem;
  padding: 0 3rem;
  font-size: 1.8rem;
  
  background-color: #1A1F38;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  h2 {
    font-size: 2.5rem;
    
    display: flex;
    justify-content: center;
    align-items: center;
    
    cursor: pointer;
  
    svg {
      margin-left: 1rem;
    }
  }
`;