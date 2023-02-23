import React from "react";
import { ButtonWrapper } from "./style.component";

export default function Button({ children, ...rest }: ButtonProps) {
    return (
        <ButtonWrapper {...rest}>
            {children}
        </ButtonWrapper>
    )
}