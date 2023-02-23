import React from "react";
import Icon from "../../component/icon/Index";
import Panel from "../../component/panel/Index";

import Button from "../../element/button/Index";
import Div from "../../element/div/Index";
import Flexbox from "../../element/flexbox/Index";
import { H1, H2, H3, H4, H5 } from "../../element/heading/Index";
import P from "../../element/p/Index";
import Span from "../../element/span/Index";

import { HeroButton, HeroWrapper, Number } from "./style.component";

interface PlayProps { }

export default function Play({ }: PlayProps) {
    return (
        <>
            <HeroWrapper mx="1.5rem" mb="1rem">
                <HeroButton tStyle="uppercase" size="lg">Buy ticket</HeroButton>
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
            <Flexbox px="6rem" pt="2rem" gap="5rem">
                <Panel fill="1">
                    <Flexbox direct="column" gap="0.7rem">
                        <Flexbox vAlign="center" hAlign="space-around" gap="2rem">
                            <H4 tStyle="uppercase" fill="1 1 50%" tAlign="center">Prize Pot</H4>
                            <H3 fill="1 1 50%" tAlign="center">$39,804</H3>
                        </Flexbox>
                        <Flexbox vAlign="center" hAlign="space-around" gap="2rem">
                            <H4 tStyle="uppercase" fill="1 1 50%" tAlign="center">Your ticket</H4>
                            <Flexbox fill="1 1 50%" hAlign="center">
                                <Span>You have <Span>0</Span> ticket this round</Span>
                            </Flexbox>
                        </Flexbox>
                        <Flexbox hAlign="center">
                            <Button>Buy ticket</Button>
                        </Flexbox>
                    </Flexbox>
                </Panel>
                <Flexbox fill="1" direct="column" gap="2rem" vAlign="center" hAlign="center">
                    <H4>Connect your wallet to check if you’ve won</H4>
                    <Flexbox hAlign="center">
                        <Button>Buy ticket</Button>
                    </Flexbox>
                </Flexbox>
            </Flexbox>
            <Div px="4rem" pt="4rem" mb="2rem">
                <H3 tStyle="uppercase" mb="3rem">History</H3>
                <Flexbox gap="3rem">
                    <Div fill="1">
                        <H4 tStyle="uppercase" mb="2rem" tAlign="center">All History</H4>
                        <Panel
                            header={(
                                <Flexbox hAlign="space-between">
                                    <Div>
                                        <H5 mb="0.2rem">360</H5>
                                        <P>Drawn Feb 19, 2023, 4:00 PM</P>
                                    </Div>
                                    <Flexbox gap="0.5rem">
                                        <Span><Icon icon="ChevronLeft" /></Span>
                                        <Span><Icon icon="ChevronRight" /></Span>
                                    </Flexbox>
                                </Flexbox>
                            )}
                            footer={(
                                <Flexbox hAlign="space-between">
                                    <Div>
                                        <H5 mb="0.2rem">360</H5>
                                        <P>Drawn Feb 19, 2023, 4:00 PM</P>
                                    </Div>
                                    <Flexbox>
                                        <Span>L</Span>
                                        <Span>R</Span>
                                    </Flexbox>
                                </Flexbox>
                            )}
                        >
                            <Flexbox vAlign="align">
                                <Div pr="2rem">
                                    <H4>Winner</H4>
                                    <H4 pl="2em">Number</H4>
                                </Div>
                                <Div px="1rem">
                                    <Number>1</Number>
                                    <Number>2</Number>
                                    <Number>3</Number>
                                    <Number>4</Number>
                                    <Number>5</Number>
                                    <Number>6</Number>
                                </Div>
                            </Flexbox>
                        </Panel>
                    </Div>
                    <Div fill="1">
                        <H4 tStyle="uppercase" mb="2rem" tAlign="center">My History</H4>
                        <Panel
                            header={(
                                <Flexbox hAlign="space-between">
                                    <Div>
                                        <H5 mb="0.2rem">360</H5>
                                        <P>Drawn Feb 19, 2023, 4:00 PM</P>
                                    </Div>
                                    <Flexbox gap="0.5rem">
                                        <Span><Icon icon="ChevronLeft" /></Span>
                                        <Span><Icon icon="ChevronRight" /></Span>
                                    </Flexbox>
                                </Flexbox>
                            )}
                            footer={(
                                <Flexbox vAlign="flex-end">
                                    <H4 w="40%" tAlign="center">Prize Pot</H4>
                                    <H3 color="warning">$39,804</H3>
                                </Flexbox>
                            )}
                        >
                            <Flexbox vAlign="align">
                                <Div pr="2rem">
                                    <H4>Winner</H4>
                                    <H4 pl="2em">Number</H4>
                                </Div>
                                <Div px="1rem">
                                    <Number>1</Number>
                                    <Number>2</Number>
                                    <Number>3</Number>
                                    <Number>4</Number>
                                    <Number>5</Number>
                                    <Number>6</Number>
                                </Div>
                            </Flexbox>
                        </Panel>
                    </Div>
                </Flexbox>
            </Div>
        </>
    )
}