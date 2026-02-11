import type { ClassValue, TVCompoundSlots, TVCompoundVariants, TVDefaultVariants, TVReturnType, TVVariants } from 'tailwind-variants';
import { tv as originTv } from 'tailwind-variants';
type TVSlots = Record<string, ClassValue> | undefined;
export type { VariantProps } from 'tailwind-variants';
export declare function tv<V extends TVVariants<S, B, EV>, CV extends TVCompoundVariants<V, S, B, EV, ES>, DV extends TVDefaultVariants<V, S, EV, ES>, B extends ClassValue = undefined, S extends TVSlots = undefined, E extends TVReturnType = TVReturnType<V, S, B, EV extends undefined ? {} : EV, ES extends undefined ? {} : ES>, EV extends TVVariants<ES, B, E['variants'], ES> = E['variants'], ES extends TVSlots = E['slots'] extends TVSlots ? E['slots'] : undefined>(options: {
    extend?: E;
    base?: B;
    slots?: S;
    variants?: V;
    compoundVariants?: CV;
    compoundSlots?: TVCompoundSlots<V & {
        unstyled: {
            true: ClassValue;
            false: ClassValue;
        };
    }, S, B>;
    defaultVariants?: DV;
}, ruiConfig?: {
    class?: ClassValue;
    className?: ClassValue;
    slots?: Record<keyof S, ClassValue>;
}, config?: any): ReturnType<typeof originTv<V & {
    unstyled: {
        true: ClassValue;
        false: ClassValue;
    };
}, TVCompoundVariants<V & {
    unstyled: {
        true: ClassValue;
        false: ClassValue;
    };
}, S, B, EV, ES>, TVDefaultVariants<V & {
    unstyled: {
        true: ClassValue;
        false: ClassValue;
    };
}, S, EV, ES>, B, S, E, EV, ES>>;
