import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background-image:linear-gradient(#eee, #aaa);
    font-family: sans-serif
  }
`;
