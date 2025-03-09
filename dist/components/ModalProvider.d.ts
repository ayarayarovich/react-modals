import { ComponentType, FC, PropsWithChildren } from 'react';
type ModalProviderValue = {
    open: (component: ComponentType, data: unknown) => void;
    close: (component: ComponentType, data?: unknown) => void;
    getComponentInstances: (Component: ComponentType) => Instance[];
};
type ModalProviderProps = PropsWithChildren;
type Instance = {
    id: number;
    data: unknown;
    isOpen: boolean;
    _scheduledForDeletion?: boolean;
};
export declare const ModalProvider: FC<ModalProviderProps>;
export declare const useModal: (component: ComponentType) => {
    open: <T = unknown>(data?: T) => void;
    close: () => void;
};
export declare const useModalInternal: () => ModalProviderValue;
export {};
