import { ComponentType, FC, PropsWithChildren } from 'react';
type ModalInstanceProviderValue<T = unknown> = {
    isOpen: boolean;
    close: () => void;
    data: T;
};
type ModalInstanceProviderProps = PropsWithChildren<{
    isOpen: boolean;
    data?: unknown;
    Component: ComponentType;
}>;
export declare const ModalInstanceProvider: FC<ModalInstanceProviderProps>;
export declare const useModalInstance: <T>() => ModalInstanceProviderValue<T>;
export {};
