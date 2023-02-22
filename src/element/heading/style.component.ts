import styled from "styled-components";

interface HeadingStyleProps {
    textStyle?: string
}

export const H1Wrapper = styled.h1<HeadingStyleProps>`
    ${props => props.textStyle && `text-transform: ${props.textStyle}`}
`

export const H2Wrapper = styled.h2<HeadingStyleProps>`
    ${props => props.textStyle && `text-transform: ${props.textStyle}`}
`

export const H3Wrapper = styled.h3<HeadingStyleProps>`
    ${props => props.textStyle && `text-transform: ${props.textStyle}`}
`

export const H4Wrapper = styled.h4<HeadingStyleProps>`
    ${props => props.textStyle && `text-transform: ${props.textStyle}`}
`

export const H5Wrapper = styled.h5<HeadingStyleProps>`
    ${props => props.textStyle && `text-transform: ${props.textStyle}`}
`

export const H6Wrapper = styled.h6<HeadingStyleProps>`
    ${props => props.textStyle && `text-transform: ${props.textStyle}`}
`