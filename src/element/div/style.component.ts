import styled from "styled-components";
import { styledElement } from "../custom";

export const DivWrapper = styled.div<DivStyledType>`
    ${props => styledElement(props)}
`