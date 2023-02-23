import styled from "styled-components";
import { styledElement, styledText } from "../custom";

export const ActionButtonWrapper = styled.button<ActionButtonStyledType>`
    ${props => styledText(props)}
    ${props => styledElement(props)}
    ${props => `width: ${props.size === "lg" ? `3.75rem` : props.size === "sm" ? `2.3rem` : `3rem`};`}
    ${props => `height: ${props.size === "lg" ? `3.75rem` : props.size === "sm" ? `2.3rem` : `3rem`};`}
    ${props => `font-size: ${props.size === "lg" ? `1.75em` : props.size === "sm" ? `0.8em` : `1.125em`};`}
    background: none;
    border: none;
    outline: none;

    &:active {
        transform: translate(0, 2px);
    }
`
