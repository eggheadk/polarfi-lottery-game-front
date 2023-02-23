import React from "react";
import Div from "../../element/div/Index";
import { PanelFooter, PanelHeader, PanelWrapper } from "./style.component";

interface PanelProps extends ElementStyledType {
    children: any
    header?: any
    footer?: any
}

export default function Panel({ children, header, footer, ...rest }: PanelProps) {
    return (
        <PanelWrapper p="1rem" {...rest}>
            {header && (
                <PanelHeader p="1.2rem">
                    {header}
                </PanelHeader>
            )}
            <Div p="1.2rem">
                {children}
            </Div>
            {footer && (
                <PanelFooter p="1.2rem">
                    {footer}
                </PanelFooter>
            )}
        </PanelWrapper>
    )
}