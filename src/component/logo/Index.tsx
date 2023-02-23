import React from "react";
import { Link } from "react-router-dom";
import { LogoImg } from "../../constant/image";
import Image from "../../element/image/Index";
import { LogoWrapper } from "./style.component";

interface LogoProps {
	size?: string
}

export default function Logo({ size }: LogoProps) {
	return (
		<LogoWrapper size={size}>
			<Link to={"/"}><Image src={LogoImg} /></Link>
		</LogoWrapper>
	)
}