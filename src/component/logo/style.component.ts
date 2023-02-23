import styled from "styled-components";

interface LogoWrapperProps {
    size?: string
}

export const LogoWrapper = styled.div<LogoWrapperProps>`
    width: ${props => props.size || `200px`};
    height: ${props => props.size || `200px`};

    @media (max-width: 500px) {
        width: ${props => props.size || `65px`};
        height: ${props => props.size || `65px`};
    }
    
    >a {
        user-select: none;
        outline: none;

        img:first-child {
            @media (max-width: 500px) {
                display: none;
            }
        }

        img:last-child {
            display: none;

            @media (max-width: 500px) {
                display: block;
            }
        }
    }
`