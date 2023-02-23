import React from "react";
import { FlexboxWrapper } from "./style.component";

export default function Flexbox ({children, ...rest}: FlexboxProps) {
    return (
        <FlexboxWrapper {...rest}>
            {
                children
            }
        </FlexboxWrapper>
    )
}