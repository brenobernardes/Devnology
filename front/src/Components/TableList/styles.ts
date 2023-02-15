import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    background: var(--table-background);
    margin: 0 auto;
    display: flex;
    justify-content: center;
    padding: 2rem 1rem 2rem;

    table {
        width: 80vw;
        border: 1px solid var(--black);
    }

    .actionButton {
        background-color: transparent;
    }

    .actionButton:hover {
        transition: 0.3s;
        color: var(--red);
    }
`