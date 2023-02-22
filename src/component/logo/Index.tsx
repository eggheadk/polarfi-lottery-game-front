import React from "react";
import { LogoImg } from "../../constant/image";
import Image from "../../element/image/Index";
import { LogoWrapper } from "./style.component";

interface LogoProps {
	size?: string
}

export default function Logo({ size }: LogoProps) {
	return (
		<LogoWrapper size={size}>
			<Image src={LogoImg} />
		</LogoWrapper>
	)
}