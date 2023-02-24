import styled from "styled-components";
import { styledElement, styledText } from "../custom";

export const H1Wrapper = styled.h1<HeadingStyledType>`
    ${props => styledText(props)}
    ${props => styledElement(props)}
    font-size: 3.5em;

    @media (max-width: 1024px) {
        font-size: 3em;
    }

    @media (max-width: 768px) {
        font-size: 2.6em;
    }

    @media (max-width: 430px) {
        font-size: 2.3em;
    }
`

export const H2Wrapper = styled.h2<HeadingStyledType>`
    ${props => styledText(props)}
    ${props => styledElement(props)}
    font-size: 2.75em;

    @media (max-width: 1024px) {
        font-size: 2.3em;
    }

    @media (max-width: 768px) {
        font-size: 2em;
    }

    @media (max-width: 430px) {
        font-size: 1.7em;
    }
`

export const H3Wrapper = styled.h3<HeadingStyledType>`
    ${props => styledText(props)}
    ${props => styledElement(props)}
    font-size: 2em;

    @media (max-width: 1024px) {
        font-size: 1.8em;
    }

    @media (max-width: 768px) {
        font-size: 1.6em;
    }

    @media (max-width: 430px) {
        font-size: 1.4em;
    }
`

export const H4Wrapper = styled.h4<HeadingStyledType>`
    ${props => styledText(props)}
    ${props => styledElement(props)}
    font-size: 1.44em;

    @media (max-width: 1024px) {
        font-size: 1.3em;
    }

    @media (max-width: 768px) {
        font-size: 1.2em;
    }

    @media (max-width: 430px) {
        font-size: 1.2em;
    }
`

export const H5Wrapper = styled.h5<HeadingStyledType>`
    ${props => styledText(props)}
    ${props => styledElement(props)}
    font-size: 1.2em;

    @media (max-width: 1024px) {
        font-size: 1.1em;
    }

    @media (max-width: 768px) {
        font-size: 1em;
    }

    @media (max-width: 430px) {
        font-size: 1em;
    }
`

export const H6Wrapper = styled.h6<HeadingStyledType>`
    ${props => styledText(props)}
    ${props => styledElement(props)}
    font-size: 4em;

    @media (max-width: 1024px) {
        font-size: 1.8em;
    }

    @media (max-width: 768px) {
        font-size: 1.6em;
    }

    @media (max-width: 430px) {
        font-size: 1.4em;
    }
`