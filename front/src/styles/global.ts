import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
    :root {
        --background: #B0E0E6;
        --table-background: #F0FFF0;
        --black: #000;
        --grey: #1C1C1C;
        --white: #FFFF;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background: var(--table-background);
    }
`