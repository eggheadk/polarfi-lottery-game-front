import React from "react";
import Icon from "../../component/icon/Index";
import Panel from "../../component/panel/Index";
import ActionButton from "../../element/action-button/Index";

import Button from "../../element/button/Index";
import Div from "../../element/div/Index";
import Flexbox from "../../element/flexbox/Index";
import { H1, H2, H3, H4, H5 } from "../../element/heading/Index";
import P from "../../element/p/Index";
import Span from "../../element/span/Index";
import useStore from "../../useStore";

import { HeroButton, HeroWrapper, Number } from "./style.component";

interface PlayProps { }

export default function Play({ }: PlayProps) {
    const { T } = useStore();

    return (
        <>
            <HeroWrapper mx="1.5rem" mb="1rem">
                <HeroButton tStyle="uppercase" size="lg">{T("global.buyticket")}</HeroButton>
            </HeroWrapper>
            <Flexbox direct="column" vAlign="center" pt="2rem" mb="1rem">
                <Flexbox vAlign="flex-end">
                    <H1 color="warning">16</H1>
                    <H3 mb="0.2em" mr="0.8rem">H</H3>
                    <H1 color="warning">52</H1>
                    <H3 mb="0.2em">M</H3>
                </Flexbox>
                <H4>Until the Draw</H4>
            </Flexbox>
            <Flexbox count={2} wrap="wrap" px="6rem" pt="2rem" gap="5rem" tablet={{ count: 1 }}>
                <Panel>
                    <Flexbox direct="column" gap="0.7rem">
                        <Flexbox vAlign="center" hAlign="space-around" gap="2rem">
                            <H4 tStyle="uppercase" fill="1 1 50%" tAlign="center">{T("global.prizepot")}</H4>
                            <H3 fill="1 1 50%" tAlign="center">$39,804</H3>
                        </Flexbox>
                        <Flexbox vAlign="center" hAlign="space-around" gap="2rem">
                            <H4 tStyle="uppercase" fill="1 1 50%" tAlign="center">{T("play.yourticket")}</H4>
                            <Flexbox fill="1 1 50%" hAlign="center">
                                <Span>You have <Span>0</Span> ticket this round</Span>
                            </Flexbox>
                        </Flexbox>
                        <Flexbox hAlign="center">
                            <Button tStyle="capitalize">{T("global.buyticket")}</Button>
                        </Flexbox>
                    </Flexbox>
                </Panel>
                <Flexbox direct="column" gap="2rem" vAlign="center" hAlign="center">
                    <H4>Connect your wallet to check if you’ve won</H4>
                    <Flexbox hAlign="center">
                        <Button tStyle="capitalize">{T("play.checknow")}</Button>
                    </Flexbox>
                </Flexbox>
            </Flexbox>
            <Div px="4rem" pt="4rem" mb="2rem">
                <H3 tStyle="uppercase" mb="3rem">History</H3>
                <Flexbox count={2} wrap="wrap" gap="3rem" laptop={{ count: 1 }}>
                    <Div mb="2rem">
                        <H4 tStyle="uppercase" mb="2rem" tAlign="center">{T("play.allhistory")}</H4>
                        <Panel
                            header={(
                                <Flexbox hAlign="space-between">
                                    <Div>
                                        <H5 mb="0.2rem">360</H5>
                                        <P>Drawn Feb 19, 2023, 4:00 PM</P>
                                    </Div>
                                    <Flexbox>
                                        <ActionButton><Icon icon="ChevronLeft" width="1.5rem" height="1.5rem" /></ActionButton>
                                        <ActionButton><Icon icon="ChevronRight" width="1.5rem" height="1.5rem" /></ActionButton>
                                    </Flexbox>
                                </Flexbox>
                            )}
                            footer={(
                                <Flexbox vAlign="flex-end">
                                    <H4 w="40%" tAlign="center">{T("global.prizepot")}</H4>
                                    <H3 color="warning">$39,804</H3>
                                </Flexbox>
                            )}
                        >
                            <Flexbox vAlign="center" tablet={{ direct: "column", gap: "1rem" }}>
                                <Div pl="1rem">
                                    <H3>Winner</H3>
                                    <H3 pl="2em">Number</H3>
                                </Div>
                                <Flexbox direct="column" fill="1" vAlign="center" pl="1rem" gap={"0.5rem"}>
                                    <Flexbox wrap="wrap" hAlign="flex-end" gap={"0.5rem"}>
                                        <Number>1</Number>
                                        <Number>2</Number>
                                        <Number>3</Number>
                                    </Flexbox>
                                    <Flexbox wrap="wrap" fill="1" hAlign="flex-end" gap={"0.5rem"}>
                                        <Number>4</Number>
                                        <Number>5</Number>
                                        <Number>6</Number>
                                    </Flexbox>
                                </Flexbox>
                            </Flexbox>
                        </Panel>
                    </Div>
                    <Div>
                        <H4 tStyle="uppercase" mb="2rem" tAlign="center">{T("play.myhistory")}</H4>
                        <Panel
                            header={(
                                <Flexbox hAlign="space-between">
                                    <Div>
                                        <H5 mb="0.2rem">360</H5>
                                        <P>Drawn Feb 19, 2023, 4:00 PM</P>
                                    </Div>
                                    <Flexbox>
                                        <ActionButton><Icon icon="ChevronLeft" width="1.5rem" height="1.5rem" /></ActionButton>
                                        <ActionButton><Icon icon="ChevronRight" width="1.5rem" height="1.5rem" /></ActionButton>
                                    </Flexbox>
                                </Flexbox>
                            )}
                            footer={(
                                <Flexbox vAlign="flex-end">
                                    <H4 w="40%" tAlign="center">{T("global.prizepot")}</H4>
                                    <H3 color="warning">$39,804</H3>
                                </Flexbox>
                            )}
                        >
                            <Flexbox vAlign="center" tablet={{ direct: "column", gap: "1rem" }}>
                                <Div pl="1rem">
                                    <H3>Winner</H3>
                                    <H3 pl="2em">Number</H3>
                                </Div>
                                <Flexbox direct="column" fill="1" vAlign="center" pl="1rem" gap={"0.5rem"}>
                                    <Flexbox wrap="wrap" hAlign="flex-end" gap={"0.5rem"}>
                                        <Number>1</Number>
                                        <Number>2</Number>
                                        <Number>3</Number>
                                    </Flexbox>
                                    <Flexbox wrap="wrap" fill="1" hAlign="flex-end" gap={"0.5rem"}>
                                        <Number>4</Number>
                                        <Number>5</Number>
                                        <Number>6</Number>
                                    </Flexbox>
                                </Flexbox>
                            </Flexbox>
                        </Panel>
                    </Div>
                </Flexbox>
            </Div>
        </>
    )
}