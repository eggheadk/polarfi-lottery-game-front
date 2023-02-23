import React from "react";
import { ActionButtonWrapper } from "./style.component";

export default function ActionButton({ children, ...rest }: ActionButtonProps) {
    return (
        <ActionButtonWrapper {...rest}>
            {children}
        </ActionButtonWrapper>
    )
}