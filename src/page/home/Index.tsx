import React from "react";
import useStore from "../../useStore";

import Button from "../../element/button/Index";
import { H1, H3, H4, H5 } from "../../element/heading/Index";
import P from "../../element/p/Index";

import { HeroLeftSection, HeroRightSection, HeroWrapper, ImageWrapper, Step } from "./style.component";
import Flexbox from "../../element/flexbox/Index";
import Div from "../../element/div/Index";
import Panel from "../../component/panel/Index";
import { HowToImg1, HowToImg2, LogoImg } from "../../constant/image";
import Image from "../../element/image/Index";
import { Link } from "react-router-dom";

interface HomeProps { }

export default function Home({ }: HomeProps) {
    const { T } = useStore();
    return (
        <>
            <HeroWrapper mx="1.5rem" mb="2rem">
                <HeroLeftSection gap="1.25rem" direct="column" tablet={{ vAlign: "center", hAlign: "center", gap: "1rem" }}>
                    <H1 tStyle="uppercase">{T("home.hero.title")}</H1>
                    <P>{T("home.hero.desc")}</P>
                    <Div>
                        <Link to={"/play"}><Button tStyle="uppercase" size="lg">{T("global.buyticket")}</Button></Link>
                    </Div>
                </HeroLeftSection>
                <HeroRightSection gap="1.5rem" direct="column" tablet={{ gap: "0.5rem", hAlign: "center" }}>
                    <H3 tStyle="uppercase">{T("global.prizepot")}</H3>
                    <H1 tStyle="uppercase" color="warning">${"39,804"}</H1>
                    <H3 color="warning">01:30:21</H3>
                </HeroRightSection>
            </HeroWrapper>
            <Div px="4rem" pt="4rem" mb="2rem" id="howto">
                <Flexbox mb="3rem" tablet={{ hAlign: "center" }}>
                    <H3 tStyle="uppercase">How to play</H3>
                </Flexbox>
                <Flexbox count={3} gap={"2rem"} wrap="wrap" px={"5rem"} mb="2rem" tablet={{ count: 1 }}>
                    <Panel>
                        <Flexbox direct="column" gap="1rem" pt="1rem">
                            <H4 tStyle="uppercase">{T("home.step1.title")}</H4>
                            <P>{T("home.step1.desc")}</P>
                            <Step>step 1</Step>
                        </Flexbox>
                    </Panel>
                    <Panel>
                        <Flexbox direct="column" gap="1rem" pt="1rem">
                            <H4 tStyle="uppercase">{T("home.step2.title")}</H4>
                            <P>{T("home.step2.desc")}</P>
                            <Step>step 2</Step>
                        </Flexbox>
                    </Panel>
                    <Panel>
                        <Flexbox direct="column" gap="1rem" pt="1rem">
                            <H4 tStyle="uppercase">{T("home.step3.title")}</H4>
                            <P>{T("home.step3.desc")}</P>
                            <Step>step 3</Step>
                        </Flexbox>
                    </Panel>
                </Flexbox>
                <Div pt="4rem" pb="2rem" px="2rem">
                    <Flexbox mb="4rem" tablet={{ direct: "column", vAlign: "center" }} gap="1rem">
                        <Flexbox fill="1" direct="column" gap="1rem" tablet={{ direct: "column", vAlign: "center", gap: "1rem" }}>
                            <H4 tStyle="uppercase">Winning Criteria</H4>
                            <P>{T("home.rule1.draw")}</P>
                            <ul>
                                <li><P>{T("home.rule1.draw1")}</P></li>
                                <li><P>{T("home.rule1.draw2")}</P></li>
                            </ul>
                            <P>{T("home.rule1.rule")}</P>
                            <Link to={"/play"}><Div mt="1rem"><Button tStyle="capitalize">{T("global.buyticket")}</Button></Div></Link>
                        </Flexbox>
                        <ImageWrapper>
                            <Image src={HowToImg1} />
                        </ImageWrapper>
                    </Flexbox>
                    <Flexbox tablet={{ direct: "column", vAlign: "center" }} gap="1rem">
                        <Flexbox fill="1" direct="column" gap="1rem" tablet={{ direct: "column", vAlign: "center", gap: "1rem" }}>
                            <H4 tStyle="uppercase">Prize Funds</H4>
                            <P>{T("home.rule2.prize")}</P>
                            <H5>{T("home.rule2.prize1.title")}</H5>
                            <ul>
                                <li>{T("home.rule2.prize1.desc")}</li>
                            </ul>
                            <H5>{T("home.rule2.prize2.title")}</H5>
                            <ul>
                                <li>{T("home.rule2.prize2.desc")}</li>
                            </ul>
                            <H5>{T("home.rule2.prize3.title")}</H5>
                            <ul>
                                <li>{T("home.rule2.prize3.desc")} <Link to={"/"}>{T("home.rule2.prize3.cakenomics")}</Link></li>
                            </ul>
                            <Link to={"/play"}><Div mt="1rem"><Button tStyle="capitalize">{T("global.buyticket")}</Button></Div></Link>
                        </Flexbox>
                        <ImageWrapper>
                            <Image src={HowToImg2} />
                        </ImageWrapper>
                    </Flexbox>
                </Div>
            </Div>
        </>
    )
}
