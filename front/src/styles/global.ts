import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
    :root {
        --background: #063;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box
    }
`