import React from "react";
import { Link } from "react-router-dom";
import { MenuContainer, MenuItem, MenuItems } from "./style.component";
import MenuItemsData from "../../mockup/MenuItemsData";

interface MenuItem {
    label: string
    link: string
    status?: string
}

interface LayoutProps {

}

export default function Menu({ }: LayoutProps) {
    return (
        <MenuContainer>
            <MenuItems>
                {MenuItemsData().map((i: MenuItem, k: number) => (
                    <MenuItem key={k}>
                        <Link to={i.link}>{i.label}</Link>
                    </MenuItem>
                ))}
            </MenuItems>
        </MenuContainer>
    )
}