import styled from "styled-components";

import {setFlex} from "../../styles/mixins/mixins.styles";

export const Wrapper = styled.div`
  background-color: ${(props) => props.theme.backgroundUIColor};

  width: 90%;
  height: fit-content;

  margin-top: 4rem;
  margin-bottom: 5rem;

  font-size: 1.75rem;

  ${setFlex({justify: 'center', direction: 'column'})};

  .container {
    ${setFlex({align: 'flex-start', direction: 'column'})};

    margin: 3rem 0;
    padding: 0 2rem;

    .header {
      ${setFlex({})}
      margin: 0 auto;
      
      .info {
        padding-right: 1.5rem;

        h1 {
          font-size: 5.5rem;
          font-family: 'Anton', sans-serif;

          margin-bottom: 4rem;
        }

        .short-info {
          color: ${(props) => props.theme.secondaryFontColor};

          margin-bottom: 3.5rem;
        }

        .cast-text {
          margin-bottom: 3.5rem;
        }

        .rating {
          font-size: 2rem;

          ${setFlex({justify: 'flex-start', align: 'center'})};
        }
      }

      .image-container {
        width: 35%;

        ${setFlex({justify: 'center', align: 'center', direction: 'column'})};

        img {
          height: 35rem;
          width: 25rem;
        }

        .movie-buttons {
          width: 25rem;
          ${setFlex({})}
        }
      }
    }

    .description {
      .main-text {
        font-size: 2rem;
        line-height: 1.3;

        margin: 2.5rem 0;

        button {
          background-color: transparent;

          border: none;

          color: ${(props) => props.theme.secondaryFontColor};
        }
      }
    }
  }

  .buttons-container {
    ${setFlex({justify: 'center', align: 'center'})};

    margin-bottom: 3rem;
  }

  @media (max-width: 1000px) {
    .container {
      .header {
        .image-container {
          img {
            height: 32rem;
            width: 22rem;
          }

          .movie-buttons {
            width: 22rem;
          }
        }
      }
    }
  }

  @media (max-width: 800px) {
    .container {
      .header {
        ${setFlex({direction: 'column', align: 'center'})};
        
        text-align: center;
        
        .info {
          h1 {
            font-size: 4rem;

            margin-bottom: 2rem;
          }

          .short-info {
            margin-bottom: 2rem;
          }

          .cast-text {
            margin-bottom: 2rem;
          }
          
          .rating {
            width: fit-content;
            
            margin: 0 auto;
          }
        }
        
        .image-container {
          order: -1;
          
          width: 100%;
          
          margin-bottom: 2rem;
          
          img {
            height: 38rem;
            width: 28rem;
          }

          .movie-buttons {
            width: 28rem;
          }
        }
      }
    }
  }

  @media (max-width: 380px) {
    .container {
      .header {
        .info {
          h1 {
            font-size: 3rem;
          }
        }

        .image-container {
          img {
            height: 32rem;
            width: 22rem;
          }

          .movie-buttons {
            width: 22rem;
          }
        }
      }
    }
  }
`;