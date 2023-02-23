import styled from "styled-components";
import { styledElement, styledText } from "../custom";

export const H1Wrapper = styled.h1<HeadingStyledType>`
    ${props => styledText(props)}
    ${props => styledElement(props)}
    font-size: 3.5em;
`

export const H2Wrapper = styled.h2<HeadingStyledType>`
    ${props => styledText(props)}
    ${props => styledElement(props)}
    font-size: 2.75em;
`

export const H3Wrapper = styled.h3<HeadingStyledType>`
    ${props => styledText(props)}
    ${props => styledElement(props)}
    font-size: 2em;
`

export const H4Wrapper = styled.h4<HeadingStyledType>`
    ${props => styledText(props)}
    ${props => styledElement(props)}
    font-size: 1.44em;
`

export const H5Wrapper = styled.h5<HeadingStyledType>`
    ${props => styledText(props)}
    ${props => styledElement(props)}
    font-size: 1em;
`

export const H6Wrapper = styled.h6<HeadingStyledType>`
    ${props => styledText(props)}
    ${props => styledElement(props)}
    font-size: 4em;
`