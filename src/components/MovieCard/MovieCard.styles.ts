import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #131313;
  
  width: 23rem;
  height: 40rem;
  
  cursor: pointer;
  
  margin-left: 1.2rem;
  
  
  .description {
    padding: .75rem 1rem;
  }
  
  h3 {
    font-size: 2rem;
    margin-bottom: .5rem;
  }
  
  p {
    font-size: 1.5rem;
  }
  
  .image-container {
    width: 100%;
    height: 75%;
    
    position: relative;
    
    
    .hover-container {
      font-size: 4rem;
      
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;

      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      
      background-color: rgba(0, 0, 0, .5);
      opacity: 0;
      transition: opacity linear .2s;
    }
    
    img {
      width: 100%;
      height: 100%;
    }
  }
  
  &:hover {
    .hover-container {
      opacity: 1;
    }
  }
`;