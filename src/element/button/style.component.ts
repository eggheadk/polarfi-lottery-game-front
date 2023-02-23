import styled from "styled-components";
import { styledElement, styledText } from "../custom";

export const ButtonWrapper = styled.button<ButtonStyledType>`
    ${props => `padding: ${props.size === "lg" ? `1.125rem 2.5rem` : props.size === "sm" ? `0.5rem 1rem` : `0.8rem 1.7rem`};`}
    ${props => `font-size: ${props.size === "lg" ? `1.75em` : props.size === "sm" ? `0.8em` : `1.125em`};`}
    color: var(--color);
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: 0.5rem;
    
    &:hover {
        background: var(--border);
    }
    
    &:active {
        transform: translate(0, 2px);
    }
    
    // @media (max-width: 768px) {
    //     ${props => `padding: ${props.size === "lg" ? `1.125rem 2.5rem` : props.size === "sm" ? `0.5rem 1rem` : `0.8rem 1.7rem`};`}
    //     ${props => `font-size: ${props.size === "lg" ? `1.75em` : props.size === "sm" ? `0.8em` : `1.125em`};`}
    // }

    ${props => styledText(props)}
    ${props => styledElement(props)}
`
