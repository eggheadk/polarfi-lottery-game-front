import React from "react";
import { Link } from "react-router-dom";
import Icon from "../icon/Index";
import { MobileMenuItem, MobileMenuItems, MobileMenuWrapper } from "./style.component";

interface MobileMenuProps { }

export default function MobileMenu({ }: MobileMenuProps) {
    return (
        <MobileMenuWrapper>
            <MobileMenuItems>
                <MobileMenuItem><Link to={"/"}><Icon icon="Book" width="1.3rem" height="1.3rem" /></Link></MobileMenuItem>
                <MobileMenuItem><Link to={"/"}><Icon icon="FAQ" width="1.3rem" height="1.3rem" /></Link></MobileMenuItem>
                <MobileMenuItem><Link to={"/"}><Icon icon="Lottery" width="1.3rem" height="1.3rem" /></Link></MobileMenuItem>
            </MobileMenuItems>
        </MobileMenuWrapper>
    )
}