import React from "react";
import { H1Wrapper } from "./style.component";

interface HeadingProps {
    children?: JSX.Element | string | number
}

export const H1 = ({ children }: HeadingProps) => {
    return (
        <H1Wrapper>
            {
                children
            }
        </H1Wrapper>
    )
}