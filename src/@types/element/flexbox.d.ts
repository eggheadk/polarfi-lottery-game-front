interface FlexboxProps extends FlexboxStyledType{
    children: any
}

interface FlexboxStyledType extends FlexStyledType, ElementStyledType{
    count?: number
}