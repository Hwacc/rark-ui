export declare function colorHex2Rgb(hex: string): string;
export declare function colorHex2RgbObject(hex: string): {
    r: number;
    g: number;
    b: number;
    a?: number;
};
export declare function colorRgbStr2RgbObject(rgba: string): {
    r: number;
    g: number;
    b: number;
    a?: number;
};
export declare function colorLab2RgbObject({ l, a, b, alpha }: {
    l: number;
    a: number;
    b: number;
    alpha?: number;
}): {
    r: number;
    g: number;
    b: number;
    a: number | undefined;
};
export declare function detectCssColorType(cssColor: string): {
    type: 'rgb' | 'rgba' | 'hex' | 'hexa' | 'lab' | 'unknown';
    value: any;
};
