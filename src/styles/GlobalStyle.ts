import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    border-radius: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;

    &:focus {
      outline: none;
    }
  }
`;