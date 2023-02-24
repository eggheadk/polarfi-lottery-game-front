import { Link } from "react-router-dom";
import Div from "../../element/div/Index";
import Flexbox from "../../element/flexbox/Index";
import { H4, H5 } from "../../element/heading/Index";
import Hr from "../../element/hr/Index";
import Span from "../../element/span/Index";
import _FOOTERITEMS from "../../mockup/footer-items";
import Logo from "../logo/Index";
import { FooterWrapper } from "./style.component";

export default function Footer() {
    return (
        <FooterWrapper>
            <Div px="5rem">
                <Flexbox count={4} mb="4rem">
                    {_FOOTERITEMS().map((item: FooterItemType, item_key: number) => (
                        <Div key={item_key} mb="1rem">
                            <H5 mb="2rem">{item.topic}</H5>
                            <Flexbox direct="column" gap="1rem">
                                {item.items.map((l_item, l_key) => (
                                    <Link to={l_item.link}>
                                        <Span color="color">{l_item.label}</Span>
                                    </Link>
                                ))}
                            </Flexbox>
                        </Div>
                    ))}
                    <Flexbox vAlign="center" h="100px">
                        <Logo />
                    </Flexbox>
                </Flexbox>
                <Flexbox>
                    <Link to={"/"}></Link>
                </Flexbox>
                <Hr />
            </Div>
        </FooterWrapper>
    )
}