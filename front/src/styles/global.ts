import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
    :root {
        --background: #B0E0E6;
        --table-background: #F0FFF0;
        --black: #000;
        --grey: #1C1C1C;
        --white: #FFFF;
        --red: #FF0000;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background: var(--table-background);
    }

    .react-modal-overlay {
        background: rgba(0, 0, 0, 0.5);

        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content {
        width: 100%;
        max-width: 576px;
        padding: 3rem;
        position: relative;
        border-radius: 0.24rem;
    }
`