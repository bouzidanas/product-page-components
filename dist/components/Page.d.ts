export declare const PageContext: import('react').Context<PageProps>;
interface PageProps {
    vertical?: boolean;
    light?: boolean;
    dark?: boolean;
    centerText?: boolean;
    height?: "full" | "fit" | string | number;
    maxHeight?: "full" | string | number;
    minHeight?: "full" | string | number;
    maxWidth?: "full" | string | number;
    gap?: "none" | "small" | "medium" | "large" | string | number;
    padding?: "none" | "small" | "medium" | "large" | string | number;
    scrollTop?: string | number;
    scrollBottom?: string | number;
    fontScale?: number;
    bgColor?: number | string | [string | number, string | number] | [string, string | number, string | number];
    bgColorSet?: string[];
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode | React.ReactNode[];
}
declare const Page: ({ height, gap, padding, bgColor, vertical, light, dark, bgColorSet, centerText, maxHeight, minHeight, maxWidth, scrollTop, scrollBottom, fontScale, className, style, children }: PageProps) => import("react/jsx-runtime").JSX.Element;
export default Page;
