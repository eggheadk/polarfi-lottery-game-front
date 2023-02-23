import React from "react";
import { IconWrapper } from "./style.component";

interface IconProps {
    icon:               string
    width?:             string
    height?:            string
}

const icons:any = {
    "ChevronRight": (
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
        </svg>
    ),
    "ChevronLeft": (
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"></path>
        </svg>
    )
}

export default function Icon ({icon, width, height}: IconProps) {
    return (
        <IconWrapper width={width} height={height}>
            {icons[icon]}
        </IconWrapper>
    )
}