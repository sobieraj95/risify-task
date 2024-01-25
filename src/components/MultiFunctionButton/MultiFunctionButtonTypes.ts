export interface IProps {
    class?: string
    variants?: ButtonVariants[]
    disabled?: boolean
    href?: string
    to?: string
}

export enum ButtonVariants {
    OUTLINED = "outlined",

    BLOCK = "block",

    SMALL = "small",
    LARGE = "large",

    ORANGE = "orange",
    RED = "red",
    GREEN = "green",
    DARKGREEN = "darkgreen",
    DARKORANGE = "darkorange",
}