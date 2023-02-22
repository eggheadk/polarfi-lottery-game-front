import React from "react";
import { ImageWrapper } from "./style.component";

interface ImageProps {
    src:            string
}

export default function Image ({src}: ImageProps) {
    return (
        <ImageWrapper src={src} />
    )
}