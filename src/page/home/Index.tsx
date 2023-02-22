import React from "react";
import { H1 } from "../../element/heading/Index";
import { HeroWrapper } from "./style.component";

interface HomeProps {}

export default function Home ({}: HomeProps) {
    return (
        <>
            <HeroWrapper>
                <H1>Welcome to Polarfi Games</H1>
            </HeroWrapper>
        </>
    )
}