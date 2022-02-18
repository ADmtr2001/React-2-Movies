import styled from "styled-components";

import {setFlex} from "../../styles/mixins/Mixins.styles";

export const Wrapper = styled.header`
  width: 100%;
  height: 70rem;
  
  background-image: url('https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABWPYs_BNraXXJ9USOd12nXFjmMY8EaPHNfJ8mK-M-yAJ-LVIPiI2czdfWF6vufw4Zlx28UQzT_kk5UXaGmQAqKS17cx_.jpg?r=e1a');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  
  .gradient {
    background: rgb(0,0,0);
    background: linear-gradient(90deg, rgba(0,0,0,0.9500175070028011) 0%, rgba(0,0,0,0.47102591036414565) 49%, rgba(255,255,255,0) 100%);
    
    width: 100%;
    height: 100%;

    overflow: auto;
  }
  
  .container {
    ${setFlex({justify: 'space-between'})};

    margin: 10rem 0 0 4rem;

    .description-container {
      width: 55rem;

      ${setFlex({justify: 'space-between', direction: 'column'})};
      
      margin-right: 2rem;

      h1 {
        font-size: 9rem;
        font-family: 'Anton', sans-serif;
        
        margin-bottom: 3rem;
      }

      .short-info {
        font-size: 1.5rem;
        color: ${(props) => props.theme.secondaryFontColor};
        
        margin-bottom: 2.5rem;
      }

      .main-text {
        font-size: 2.2rem;
        
        margin-bottom: 2.5rem;
      }

      .cast-text {
        font-size: 1.5rem;
        
        margin-bottom: 2.5rem;
      }

      svg {
        margin-right: .5rem;
      }
    }
    
    p {
      line-height: 1.3;
    }

    .rating {
      font-size: 2rem;

      ${setFlex({justify: 'flex-start', align: 'center'})};
      
      margin-bottom: 5rem;
    }
  }
`;