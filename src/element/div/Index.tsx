import React from "react";
import { DivWrapper } from "./style.component";

export default function Div({ children, id, ...rest }: DivProps) {
    return (
        <DivWrapper {...rest} id={id}>
            {children}
        </DivWrapper>
    )
}