import styled from "styled-components";

export const Wrapper = styled.nav`
  width: 10rem;
  height: 100vh;
  padding: 0 3rem;
  font-size: 1.8rem;
  position: fixed;
  
  background-color: #131313;
  
  .navbar-content {
    margin-top: 2rem;
    
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 3rem 0;
    
    img {
      width: 150%;
      
      color: white;
      
      cursor: pointer;
    }
    
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
  }
`;