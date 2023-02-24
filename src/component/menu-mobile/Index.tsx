import React from "react";
import { Link } from "react-router-dom";
import Flexbox from "../../element/flexbox/Index";
import Span from "../../element/span/Index";
import Icon from "../icon/Index";
import { MobileMenuItem, MobileMenuItems, MobileMenuWrapper } from "./style.component";

interface MobileMenuProps { }

export default function MobileMenu({ }: MobileMenuProps) {
    return (
        <MobileMenuWrapper>
            <MobileMenuItems>
                <MobileMenuItem>
                    <Link to={"/"}>
                        <Flexbox direct="column" vAlign="center" gap="0.5rem">
                            <Icon fill="color" icon="Book" width="1.3rem" height="1.3rem" />
                            <Span color="color" fsize="0.8em">How to play</Span>
                        </Flexbox>
                    </Link>
                </MobileMenuItem>
                <MobileMenuItem>
                    <Link to={"/"}>
                        <Flexbox direct="column" vAlign="center" gap="0.5rem">
                            <Icon fill="color" icon="FAQ" width="1.3rem" height="1.3rem" />
                            <Span color="color" fsize="0.8em">FAQ</Span>
                        </Flexbox>
                    </Link>
                </MobileMenuItem>
                <MobileMenuItem>
                    <Link to={"/"}>
                        <Flexbox direct="column" vAlign="center" gap="0.5rem">
                            <Icon fill="color" icon="Lottery" width="1.3rem" height="1.3rem" />
                            <Span color="color" fsize="0.8em">Buy ticket</Span>
                        </Flexbox>
                    </Link>
                </MobileMenuItem>
            </MobileMenuItems>
        </MobileMenuWrapper>
    )
}