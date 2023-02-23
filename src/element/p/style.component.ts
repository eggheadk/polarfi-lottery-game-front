import styled from "styled-components";
import { styledElement, styledText } from "../custom";

export const PWrapper = styled.p<PStyledType>`
    ${props => styledText(props)}
    ${props => styledElement(props)}
`
