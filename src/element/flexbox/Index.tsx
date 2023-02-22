import React from "react";
import { FlexboxWrapper } from "./style.component";

export default function Flexbox ({children}: FlexboxProps) {
    return (
        <FlexboxWrapper>
            {
                children
            }
        </FlexboxWrapper>
    )
}