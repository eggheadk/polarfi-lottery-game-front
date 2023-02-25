import styled from "styled-components";
import { BuyTicketBannerImg } from "../../constant/image";
import Button from "../../element/button/Index";
import Section from "../../element/section/Index";
import Span from "../../element/span/Index";

export const HeroWrapper = styled(Section)`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 250px;
    background: no-repeat url(${BuyTicketBannerImg});
    background-size: cover;
    background-position: center;
    border-radius: 0.5rem;
`

export const HeroButton = styled(Button)`
    transform: rotateZ(-10deg);

    &:hover {
        animation: Swing .3s ease 0s 3;
    }

    &:active {
        transform: rotateZ(-10deg) translate(0, 2px) !important;
    }
`

export const Number = styled(Span)`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    font-size: 2.5rem;
    font-weight: 700;
    background: black;

    @media (max-width: 1440px) {
        width: 4.7rem;
        height: 4.7rem;
    }
`