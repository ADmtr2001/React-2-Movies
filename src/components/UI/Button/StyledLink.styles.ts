import styled from "styled-components";

export const Wrapper = styled.div`
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    
    color: #FF4E4E;
    background-color: transparent;

    text-decoration: none;
    border-radius: 0.3rem;
    
    font-size: 2.8rem;
    
    width: 23rem;
    height: 5rem;
    
    outline: none;
    border: 0.954145px solid #FF4E4E;
    border-radius: 4rem;
    
    transition: all linear .2s;
    
    :hover {
      background-color: #FF4E4E;
      color: white;
    }
  }
`;