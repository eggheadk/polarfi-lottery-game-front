import React from "react";
import useStore from "../../useStore";

import Button from "../../element/button/Index";
import { H1, H3, H4 } from "../../element/heading/Index";
import P from "../../element/p/Index";

import { HeroLeftSection, HeroRightSection, HeroWrapper, Step } from "./style.component";
import Flexbox from "../../element/flexbox/Index";
import Div from "../../element/div/Index";
import Panel from "../../component/panel/Index";
import { LogoImg } from "../../constant/image";
import Image from "../../element/image/Index";
import { Link } from "react-router-dom";

interface HomeProps { }

export default function Home({ }: HomeProps) {
    const { T } = useStore();
    return (
        <>
            <HeroWrapper mx="1.5rem" mb="2rem">
                <HeroLeftSection gap="1.25rem" direct="column">
                    <H1 tStyle="uppercase">{T("home.hero.title")}</H1>
                    <P>{T("home.hero.desc")}</P>
                    <div>
                        <Link to={"/play"}><Button tStyle="uppercase" size="lg">Play</Button></Link>
                    </div>
                </HeroLeftSection>
                <HeroRightSection gap="1.5rem" direct="column">
                    <H3 tStyle="uppercase">Prize pot</H3>
                    <H1 tStyle="uppercase" color="warning">${"39,804"}</H1>
                    <H3 color="warning">01:30:21</H3>
                </HeroRightSection>
            </HeroWrapper>
            <Div px="4rem" pt="4rem" mb="2rem" id="howto">
                <H3 tStyle="uppercase" mb="3rem">How to play</H3>
                <Flexbox count={3} px={"5rem"} gap={"2rem"}>
                    <Panel>
                        <H4 tStyle="uppercase" mb="1rem">Buy ticket</H4>
                        <P>Lorem ipsum is placeholder text common ly used Lorem ipsum is placeholder text commonly</P>
                        <Step>step 1</Step>
                    </Panel>
                    <Panel>
                        <H4 tStyle="uppercase" mb="1rem">Buy ticket</H4>
                        <P>Lorem ipsum is placeholder text common ly used Lorem ipsum is placeholder text commonly</P>
                        <Step>step 2</Step>
                    </Panel>
                    <Panel>
                        <H4 tStyle="uppercase" mb="1rem">Buy ticket</H4>
                        <P>Lorem ipsum is placeholder text common ly used Lorem ipsum is placeholder text commonly</P>
                        <Step>step 3</Step>
                    </Panel>
                </Flexbox>
                <Div pt="4rem" pb="2rem" px="2rem">
                    <Flexbox mb="3rem">
                        <Flexbox direct="column" gap="1rem">
                            <H4 tStyle="uppercase">Winning Criteria</H4>
                            <P>Lorem ipsum is placeholder text common ly used Lorem ipsum is placeholder text commonlyLorem ipsum is placeholder text common ly used Lorem ipsum is placeholder text commonly</P>
                            <P>Lorem ipsum is placeholder text commonlyLorem ipsum is placeholder text common ly used Lorem ipsum is placeholder text commonly</P>
                            <P>Lorem ipsum is placeholder text common ly used Lorem ipsum is placeholder text commonlyLorem ipsum is placeholder text common ly used Lorem ipsum is placeholder text commonly Lorem ipsum is placeholder text common ly used Lorem ipsum is placeholder text commonlyLorem ipsum is placeholder text common ly used Lorem ipsum is placeholder text commonly</P>
                            <Link to={"/play"}><div><Button tStyle="uppercase">Play</Button></div></Link>
                        </Flexbox>
                        <Div minw="400px">
                            <Image src={LogoImg} />
                        </Div>
                    </Flexbox>
                    <Flexbox>
                        <Flexbox direct="column" gap="1rem">
                            <H4 tStyle="uppercase">Prize Funds</H4>
                            <P>Lorem ipsum is placeholder text common ly used Lorem ipsum is placeholder text commonlyLorem ipsum is placeholder text common ly used Lorem ipsum is placeholder text commonly</P>
                            <P>Lorem ipsum is placeholder text commonlyLorem ipsum is placeholder text common ly used Lorem ipsum is placeholder text commonly</P>
                            <P>Lorem ipsum is placeholder text common ly used Lorem ipsum is placeholder text commonlyLorem ipsum is placeholder text common ly used Lorem ipsum is placeholder text commonly Lorem ipsum is placeholder text common ly used Lorem ipsum is placeholder text commonlyLorem ipsum is placeholder text common ly used Lorem ipsum is placeholder text commonly</P>
                            <Link to={"/play"}><div><Button tStyle="uppercase">Play</Button></div></Link>
                        </Flexbox>
                        <Div minw="400px">
                            <Image src={LogoImg} />
                        </Div>
                    </Flexbox>
                </Div>
            </Div>
        </>
    )
}
