import styled from "styled-components";

import image from '../../assets/spider.jpg'

export const Wrapper = styled.header`
  width: 100%;
  height: 70vh;
  
  background-image: url(${image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  
  font-size: 2rem;
  background-color: white;
  
  .blur {
    background-color: rgba(0, 0, 0, .4);
    width: 100%;
    height: 100%;

    overflow: auto;
  }
  
  .container {
    display: flex;
    justify-content: space-between;

    margin: 21rem 3rem 0 8.1rem;
  }
  
  .description {
    width: 66rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 2rem;
    
    h1 {
      font-size: 4rem;
    }
    
    svg {
      margin-right: .5rem;
    }
  }
  
  .rating {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  
  .player {
  }
`;