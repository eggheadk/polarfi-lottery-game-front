import React from "react";
import { PWrapper } from "./style.component";

export default function P({ children, ...rest }: PProps) {
	return (
		<PWrapper {...rest}>
			{children}
		</PWrapper>
	)
}