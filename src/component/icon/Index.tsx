import React from "react";
import { IconWrapper } from "./style.component";

interface IconProps {
    icon:               string
}

const icons:any = {
    "Logo": (
        <div></div>
    )
}

export default function Icon ({icon}: IconProps) {
    return (
        <IconWrapper>
            {icons[icon]}
        </IconWrapper>
    )
}