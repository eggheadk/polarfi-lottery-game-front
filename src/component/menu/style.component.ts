import styled from "styled-components";

export const MenuContainer = styled.menu`
	display: flex;
	justify-content: right;
	flex: 1;
	margin: 0;
	padding: 0;
`

export const MenuItems = styled.ul`
	list-style: none;
	display: flex;
	margin: 0;
	padding: 0;
`

export const MenuItem = styled.li`

	> a {
		display: inline-block;
		padding: 0.8rem 0.8rem;
		font-size: 1.125em;
		font-weight: 500;
		text-decoration: none;
		text-transform: uppercase;
		color: var(--color);
	}
`
