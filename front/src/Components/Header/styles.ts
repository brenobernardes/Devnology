import styled from "styled-components";

export const Container = styled.header`
    background: var(--background);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    position: relative;
    
`

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1120px;
    margin: 0 auto;
    padding: 2rem 1rem 2rem;
    background: var(--background);

    h1 {
        background: var(--background);
    }

    button {
        width: 8rem;
        height: 2rem;
        border-radius: .5rem;
        background-color: var(--grey);
        color: var(--white);
        transition: 0.2s;

        &:hover {
            background-color: var(--white);
            color: var(--black);
        }
    }
`