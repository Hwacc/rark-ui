export declare function px2rem(px: number | string): number;
export declare function rem2px(rem: number | string): number;
export declare function spaceTimes(times: number): number;
export declare function alignPx(px: number, dpr?: number, round?: boolean): number;
export declare function getNodeCssVar(node: HTMLElement | null | undefined, varName: string): string | undefined;
export declare function getNodeCssVar(node: HTMLElement | null | undefined, varName: string, fallback: string): string;
export declare function getCssVar(variableName: string, fallback?: string): string;
export declare function getCssColor(colorName: string, fallback?: string): string;
