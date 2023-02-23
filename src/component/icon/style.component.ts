import styled from "styled-components";

export const IconWrapper = styled.div<{width?:string, height?: string}>`
    width: ${props => props.width ? props.width : "1rem"};
    width: ${props => props.height ? props.height : "1rem"};
`