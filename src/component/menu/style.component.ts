import styled from "styled-components";

export const MenuContainer = styled.menu<{ isOpen?: boolean }>`
	position: relative;
	display: flex;
	justify-content: right;
	align-items: center;
	flex: 1;
	margin: 0;
	padding: 0;

	${props => props.isOpen ? `
	` : ``}
`

export const MenuItems = styled.ul<{ isOpen?: boolean }>`
	list-style: none;
	display: flex;
	margin: 0;
	padding: 0;

	@media (max-width: 1024px) {
		position: absolute;
		top: calc(100% + 0.5rem);
		padding: 0.8rem;
		display: none;
		width: calc(100vw - 7rem);
		margin-top: 0px;
		background: var(--bg);
		border-bottom: 1px solid var(--border);
		box-shadow: 0 0 20px 0 #FFFFFF44;

		${props => props.isOpen ? `
			{
				display: block !important;
			}
		` : ``} 
	}

	@media (max-width: 768px) {
		width: calc(100vw - 2rem);
	}
`

export const MenuItem = styled.li<{ isOpen?: boolean }>`

	> a {
		display: inline-block;
		padding: 0.8rem 0.8rem;
		font-size: 1.125em;
		font-weight: 500;
		text-decoration: none;
		text-transform: uppercase;
		color: var(--color);
		border-radius: 5px;

		@media (max-width: 1024px) {
			${props => props.isOpen ? `
				{
					width: 100%;
				}
			` : ``} 
		}

		&:hover {
			background: var(--border);
		}
	}
`

export const Hamburger = styled.button<{ isOpen?: boolean }>`
	position: relative;
	display: none;
	background-color: var(--bg);
	margin-left: 1rem;
	width: 28px;
	height: 24px;
	border: none;
	border-radius: unset;

	span, &:after, &:before {
		display: inline-block;
		position: absolute;
		right: 0px;
		width: 100%;
		height: 2px;
		background-color: var(--color);
		transform: translateY(50%);
		border-radius: 2px;
		content: '';
		transition: all .3s ease-in-out;
	}

	span {
		top: 0px;
	}

	&:before {
		top: 11px;
	}

	&:after {
		top: 22px;
	}

	&:active {
		background-color: var(--border-secondary);
	}

	${props => props.isOpen ? `
		span {
			transform: translate3d(0px, 11px, 0) rotate(225deg);
		}

		&:before {
			transform: rotate(0deg) translate3d(0, 0, 0);
			opacity: 0;
		}

		&:after {
			transform: translate3d(-0px, -11px, 0) rotate(-225deg);
		}
	` : ``}
	}

	@media (max-width: 1024px) {
		display: inline-block;
	}
`