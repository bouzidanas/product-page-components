interface PageSectionProps {
    vertical?: boolean;
    light?: boolean;
    dark?: boolean;
    top?: boolean;
    bottom?: boolean;
    centerText?: boolean;
    clip?: boolean;
    height?: "full" | "fit" | string | number;
    maxHeight?: "full" | string | number;
    minHeight?: "full" | string | number;
    maxWidth?: "full" | string | number;
    z?: number;
    gap?: "none" | "small" | "medium" | "large" | string | number;
    padding?: "none" | "small" | "medium" | "large" | string | number;
    scrollTop?: string | number;
    scrollBottom?: string | number;
    fontScale?: number;
    bgColor?: number | string | [string | number, string | number] | [string, string | number, string | number];
    radius?: string | number;
    className?: string;
    style?: React.CSSProperties;
    id?: string;
    children?: React.ReactNode | React.ReactNode[];
}
declare const PageSection: import('react').ForwardRefExoticComponent<PageSectionProps & import('react').RefAttributes<HTMLDivElement>>;
export default PageSection;
