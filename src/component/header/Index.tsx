import React from "react";
import Logo from "../logo/Index";
import Menu from "../menu/Index";
import { HeaderWrapper } from "./style.component";

interface LayoutProps {}

export default function Header ({}: LayoutProps) {
    return (
        <HeaderWrapper>
            <Logo />
            <Menu />
        </HeaderWrapper>
    )
}
