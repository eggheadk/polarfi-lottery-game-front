import React from "react";
import Footer from "../component/footer/Index";
import Header from "../component/header/Index";
import MobileMenu from "../component/menu-mobile/Index";
import { Container } from "./style.component";

interface LayoutProps { 
    children: JSX.Element | string | number
}

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <Header />
            <Container>
                {children}
            </Container>
            <MobileMenu />
            <Footer />
        </>
    )
}
