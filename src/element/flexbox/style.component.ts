import styled from "styled-components";
import { styledElement, styledFlex } from "../custom";

export const FlexboxWrapper = styled.div<FlexboxStyledType>`
	display: flex;
	${props => styledFlex(props)}
	${props => styledElement(props)}
`
	
		// ${props => {
		// 	const { count, direct, gapX, gapY, gap, tablet } = props;
		// 	return `
		// 		${count			? }
		// 		${tablet		? `
		// 				${tablet}
		// 		` : ``}
		// 	`
		// }}