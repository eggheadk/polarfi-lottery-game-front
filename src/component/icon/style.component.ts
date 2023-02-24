import styled from "styled-components";

export const IconWrapper = styled.div<{ width?: string, height?: string, fill?: string }>`
    width: ${props => props.width ? props.width : "1rem"};
    height: ${props => props.height ? props.height : "1rem"};
    color: ${props => props.fill ? `var(--${props.fill})` : "1rem"};
`