import styled from "styled-components";
import Button from "../../element/button/Index";
import Section from "../../element/section/Index";
import Span from "../../element/span/Index";

export const HeroWrapper = styled(Section)`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 200px;
    background: #111212;
`

export const HeroButton = styled(Button)`
    transform: rotateZ(-10deg);

    &:active {
        transform: rotateZ(-10deg) translate(0, 2px);
    }
`

export const Number = styled(Span)`
display: inline-flex;
align-items: center;
justify-content: center;
width: 4rem;
height: 4rem;
border-radius: 50%;
font-size: 2.5rem;
font-weight: 700;
background: black;
`