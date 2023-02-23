import React from "react";
import { ImageWrapper } from "./style.component";

export default function Image ({...rest}: ImageProps) {
    return (
        <ImageWrapper {...rest} />
    )
}