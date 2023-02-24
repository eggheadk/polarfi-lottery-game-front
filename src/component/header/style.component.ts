import styled from "styled-components";

export const HeaderWrapper = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    width: 100%;
    height: 6.5rem;
    padding: 0 3.5rem;
    background: var(--bg);
    z-index: 8000;

    @media (max-width: 768px) {
        padding: 0 1rem;
    }
`