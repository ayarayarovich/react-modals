import { ComponentType } from 'react';
export declare const createModalHook: <TData>(component: ComponentType) => () => {
    open: (data?: TData | undefined) => void;
    close: () => void;
};
export declare const createModal: <TData>(component: ComponentType) => {
    Component: ComponentType;
    use: () => {
        open: (data?: TData | undefined) => void;
        close: () => void;
    };
};
