import styled from "styled-components";
import { styledElement, styledFlex } from "../custom";

export const FlexboxWrapper = styled.div<FlexboxStyledType>`
    ${props => styledFlex(props)}
    ${props => styledElement(props)}
`