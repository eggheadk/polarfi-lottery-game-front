import React from "react";
import { SectionWrapper } from "./style.component";

export default function Section({ children, ...rest }: SectionProps) {
    return (
        <SectionWrapper {...rest}>
            {children}
        </SectionWrapper>
    )
}