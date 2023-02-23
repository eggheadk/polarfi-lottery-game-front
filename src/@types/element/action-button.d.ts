interface ActionButtonProps extends ActionButtonStyledType {
    children?: JSX.Element | string | number
}

interface ActionButtonStyledType extends TextStyledType, ElementStyledType {
    size?: 'sm' | 'md' | 'lg'
}