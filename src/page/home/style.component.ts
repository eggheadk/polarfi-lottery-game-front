import styled from "styled-components";
import { HeroImg } from "../../constant/image";
import Div from "../../element/div/Index";
import Flexbox from "../../element/flexbox/Index";
import Section from "../../element/section/Index";

export const HeroWrapper = styled(Section)`
    display: flex;
    align-items: center;
    height: 40vw;
    background: no-repeat url(${HeroImg});
    background-size: cover;
    background-position: center center;
    border-radius: 0.5rem;

    @media (max-width: 768px) {
        flex-direction: column;
        height: 100vh;
        max-height: 480px;
        text-align: center;
    }
`

export const HeroLeftSection = styled(Flexbox)`
    flex: 1 1 50%;
    padding: 0 2rem 0 4rem;

    @media (max-width: 768px) {
        padding: 2rem 2rem;
    }
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

    @media (max-width: 1024px) {
        top: 0.5rem;
        right: 1rem;
    }

    // @media (max-width: 1024px) {
    //     top: 0.7rem;
    //     right: 0.7rem;
    // }
`

export const ImageWrapper = styled(Flexbox)`
    align-items: flex-start;
    min-width: 400px;
    max-width: 400px;
    height: 200px;
    border-radius: 0.5rem;

    > img {
        max-height: unset;
        border-radius: 0.5rem;
    }

    @media (max-width: 1400px) {
        min-width: 350px;
    }

    @media (max-width: 1024px) {
        min-width: 270px;
    }
`