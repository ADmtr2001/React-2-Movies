import styled from "styled-components";

export const Wrapper = styled.form`
  margin: 2rem 0;
  
  width: 80%;

  textarea {
    width: 100%;
    min-height: 10rem ;
    
    font-size: 1.8rem;
    resize: none;
  }
  
  .error-message {
    color: ${(props) => props.theme.red};
    font-size: 1.5rem;
    text-align: right;
    margin: .5rem 0;
  }
  
  button {
    margin-left: auto;
    margin-top: .5rem;
  }
`;