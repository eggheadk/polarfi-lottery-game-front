interface ButtonProps extends ButtonStyledType {
    children?: any
}

interface ButtonStyledType extends TextStyledType, ElementStyledType {
    size?: 'sm' | 'md' | 'lg'
}