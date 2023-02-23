import React from "react";
import { SpanWrapper } from "./style.component";

export default function Span({ children, ...rest }: SpanProps) {
	return (
		<SpanWrapper {...rest}>
			{children}
		</SpanWrapper>
	)
}