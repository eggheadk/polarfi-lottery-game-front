import styled from "styled-components";
import { styledElement, styledText } from "../custom";

export const SpanWrapper = styled.span<PStyledType>`
    ${props => styledText(props)}
`
