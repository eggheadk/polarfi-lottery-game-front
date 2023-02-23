import styled from "styled-components";

export const MobileMenuWrapper = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    display: none;
    width: 100vw;
    height: 5rem;
    background: var(--light);

    @media (max-width: 768px) {
        display: block;
    }
`

export const MobileMenuItems = styled.ul`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    padding: 0;
    margin: 0;
`

export const MobileMenuItem = styled.li`
    list-style: none;
    padding: 0;
    margin: 0;

    > a, >button {
        display: inline-block;
        padding: 0.9rem;
        background: none;
        border: 1px solid var(--border);
        border-radius: 0.5rem;

        &:hover {
            background: var(--border);
        }

        &:active {
            transform: translate(0, 2px);
        }
    }
`
