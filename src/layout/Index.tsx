import React from "react";
import Header from "../component/header/Index";
import { Container } from "./style.component";

interface LayoutProps { 
    children: JSX.Element | string | number
}

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <Header />
            <Container></Container>
        </>
    )
}
