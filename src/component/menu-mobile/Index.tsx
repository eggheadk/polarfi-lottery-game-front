import React from "react";
import { Link } from "react-router-dom";
import Icon from "../icon/Index";
import { MobileMenuItem, MobileMenuItems, MobileMenuWrapper } from "./style.component";

interface MobileMenuProps { }

export default function MobileMenu({ }: MobileMenuProps) {
    return (
        <MobileMenuWrapper>
            <MobileMenuItems>
                <MobileMenuItem><Link to={"/"}><Icon icon="MetaMask" /></Link></MobileMenuItem>
                <MobileMenuItem><Link to={"/"}><Icon icon="MetaMask" /></Link></MobileMenuItem>
                <MobileMenuItem><Link to={"/"}><Icon icon="MetaMask" /></Link></MobileMenuItem>
                <MobileMenuItem><Link to={"/"}><Icon icon="MetaMask" /></Link></MobileMenuItem>
            </MobileMenuItems>
        </MobileMenuWrapper>
    )
}