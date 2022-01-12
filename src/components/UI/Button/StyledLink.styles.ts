import styled from "styled-components";

export const Wrapper = styled.div`
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    
    color: white;
    background-color: #1A1F38;

    text-decoration: none;
    border-radius: 0.3rem;
    
    font-size: 3rem;
    
    width: 17rem;
    height: 4.5rem;
    
    outline: none;
    border: none;
    
    transition: background-color linear .2s;
    
    :hover {
      background-color: #27305e;
    }
  }
`;