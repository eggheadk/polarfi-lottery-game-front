import React from "react";
import { Link } from "react-router-dom";
import { MenuContainer, MenuItem as MenuItemType, MenuItems } from "./style.component";
import MenuItemsData from "../../mockup/MenuItemsData";

interface MenuItemType {
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
                {MenuItemsData().map((i: MenuItemType, k: number) => (
                    <MenuItemType key={k}>
                        <Link to={i.link}>{i.label}</Link>
                    </MenuItemType>
                ))}
            </MenuItems>
        </MenuContainer>
    )
}