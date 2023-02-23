import styled from "styled-components";
import Div from "../../element/div/Index";
import Flexbox from "../../element/flexbox/Index";
import Section from "../../element/section/Index";

export const HeroWrapper = styled(Section)`
    display: flex;
    align-items: center;
    height: 40vw;
    background: #111212;
`

export const HeroLeftSection = styled(Flexbox)`
    flex: 1 1 50%;
    padding: 0 2rem 0 4rem;
`

export const HeroRightSection = styled(Flexbox)`
    flex: 1 1 50%;
    text-align: center;
`

export const Step = styled(Div)`
    position: absolute;
    top: 1.125rem;
    right: 1.125rem;
    text-transform: uppercase;
    font-weight: bold;
`