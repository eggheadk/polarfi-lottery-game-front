interface PProps extends PStyledType {
	children: JSX.Element | string | number
}

interface PStyledType extends TextStyledType, ElementStyledType {
}