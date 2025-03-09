import { ComponentType } from 'react';
export declare const createModalHook: <TData>(component: ComponentType) => () => {
    open: (data?: TData | undefined) => void;
    close: () => void;
};
