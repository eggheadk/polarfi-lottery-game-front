import styled from "styled-components";
import { styledElement } from "../custom";

export const SectionWrapper = styled.section<SectionStyledType>`
    ${props => styledElement(props)}
`