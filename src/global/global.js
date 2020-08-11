import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    background-color: #051321;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    cursor: none;
    overflow-x: hidden;
    ::-webkit-scrollbar {
        width: 10px;
      }
      ::-webkit-scrollbar-track {
        background: white;
      }
      ::-webkit-scrollbar-thumb {
        background: #fabf00;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
      }
  }
`;
