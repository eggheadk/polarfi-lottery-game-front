import styled from "styled-components";

export const MobileMenuWrapper = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    display: none;
    width: 100vw;
    height: 5rem;
    background: var(--bg);
    border-top: 1px solid var(--border);

    @media (max-width: 768px) {
        display: block;
    }
`

export const MobileMenuItems = styled.ul`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    padding: 0 1rem;
    margin: 0;
`

export const MobileMenuItem = styled.li`
    flex: 1;
    list-style: none;
    padding: 0;
    margin: 0;
    text-align: center;

    > a, >button {
        text-decoration: none;
        display: inline-block;
        padding: 0.9rem;
        background: none;

        &:active {
            transform: translate(0, 2px);
        }
    }
`
