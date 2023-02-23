import React from "react";
import Flexbox from "../../element/flexbox/Index";
import Span from "../../element/span/Index";
import { ConnectWalletButtonWrapper } from "./style.component";

export default function ConnectWalletButton() {
    return (
        <ConnectWalletButtonWrapper tStyle="uppercase" px="1rem">
            <Flexbox>
                <Span>Connect Wallet</Span>
            </Flexbox>
        </ConnectWalletButtonWrapper>
    )
}