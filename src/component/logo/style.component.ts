import styled from "styled-components";

interface LogoWrapperProps {
    size?: string
}

export const LogoWrapper = styled.div<LogoWrapperProps>`
    width: ${props => props.size || `150px`};
    height: ${props => props.size || `150px`};
`