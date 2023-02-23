import React from "react";
import { H1Wrapper, H2Wrapper, H3Wrapper, H4Wrapper, H5Wrapper, H6Wrapper } from "./style.component";

export const H1 = ({ children, ...rest }: HeadingProps) => {
    return (
        <H1Wrapper {...rest}>
            {
                children
            }
        </H1Wrapper>
    )
}

export const H2 = ({ children, ...rest }: HeadingProps) => {
    return (
        <H2Wrapper {...rest}>
            {
                children
            }
        </H2Wrapper>
    )
}

export const H3 = ({ children, ...rest }: HeadingProps) => {
    return (
        <H3Wrapper {...rest}>
            {
                children
            }
        </H3Wrapper>
    )
}

export const H4 = ({ children, ...rest }: HeadingProps) => {
    return (
        <H4Wrapper {...rest}>
            {
                children
            }
        </H4Wrapper>
    )
}

export const H5 = ({ children, ...rest }: HeadingProps) => {
    return (
        <H5Wrapper {...rest}>
            {
                children
            }
        </H5Wrapper>
    )
}

export const H6 = ({ children, ...rest }: HeadingProps) => {
    return (
        <H6Wrapper {...rest}>
            {
                children
            }
        </H6Wrapper>
    )
}