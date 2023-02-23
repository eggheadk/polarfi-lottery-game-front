interface ButtonProps extends ButtonStyledType {
    children?: JSX.Element | string | number
}

interface ButtonStyledType extends TextStyledType, ElementStyledType {
    size?: 'sm' | 'md' | 'lg'
}