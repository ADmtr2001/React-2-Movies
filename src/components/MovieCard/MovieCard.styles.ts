import styled from "styled-components";

import {Link} from "react-router-dom";

import {setFlex} from "../../styles/mixins/mixins.styles";

interface WrapperProps {
  poster: string;
}

export const Wrapper = styled(Link)<WrapperProps>`
  display: inline-block;

  background-color: #131313;
  background-image: url(${(props) => props.poster ? props.poster : ''});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  width: 22rem;
  height: 34rem;

  cursor: pointer;

  position: relative;

  .buttons-container {
    ${setFlex({direction: 'column'})};
    gap: 1rem;

    position: absolute;
    right: 0;
    top: 0;
    z-index: 1001;
    
    opacity: 0;
    transition: opacity linear .2s;
  }
  
  .content-container {
    width: 100%;
    height: 100%;
    
    position: relative;
    
    background: rgba(0, 0, 0, 0);
    
    transition: background-color linear .2s;

    overflow: auto;
  }

  .description-container {
    background: rgb(0,0,0);
    background: linear-gradient(0deg, rgba(0,0,0,0.9355450798483456) 0%, rgba(0,0,0,0.3557131470752364) 72%, rgba(13,13,13,0) 100%);
    
    padding: 3rem 1rem .75rem;
    
    position: absolute;
    left: 0;
    bottom: 0;
    
    width: 100%;

    h3 {
      font-size: 2rem;
      
      margin-bottom: .5rem;
    }

    p {
      font-size: 1.5rem;
    }
  }

  &:hover {
    .buttons-container {
      opacity: 1;
    }

    .content-container {
      background-color: rgba(0, 0, 0, 0.3);
    }
  }
  
  // Desktop
  @media (max-width: 1500px) {
    width: 25rem;
    height: 34rem;
  }

  @media (max-width: 1330px) {
    width: 22rem;
    height: 32rem;
  }

  @media (max-width: 1200px) {
    width: 25rem;
    height: 34rem;
  }

  @media (max-width: 1100px) {
    width: 22rem;
    height: 32rem;
  }

  //Tablet
  @media (max-width: 980px) {
    width: 18rem;
    height: 28rem;
  }

  @media (max-width: 940px) {
    width: 20rem;
    height: 30rem;
  }

  @media (max-width: 840px) {
    width: 20rem;
    height: 30rem;
  }
  
  @media (max-width: 800px) {
    width: 18rem;
    height: 28rem;
  }

  @media (max-width: 750px) {
    width: 16rem;
    height: 23rem;
  }

  @media (max-width: 690px) {
    width: 20rem;
    height: 28rem;
  }

  @media (max-width: 590px) {
    width: 16rem;
    height: 24rem;
  }

  @media (max-width: 520px) {
    width: 14rem;
    height: 22rem;

    .description-container {
      h3 {
        font-size: 1.5rem;
      }
    }
  }

  @media (max-width: 480px) {
    width: 12rem;
    height: 20rem;

    .description-container {
      h3 {
      }
    }
  }

  @media (max-width: 480px) {
    width: 12rem;
    height: 20rem;
  }

  @media (max-width: 430px) {
    width: 10rem;
    height: 18rem;
  }

  @media (max-width: 390px) {
    width: 14rem;
    height: 22rem;
  }

  @media (max-width: 370px) {
    width: 12rem;
    height: 20rem;
  }
`;