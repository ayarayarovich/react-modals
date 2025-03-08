import { ComponentType } from "react";

import { useModal } from "./components/ModalProvider";

export const createModalHook = <TData>(component: ComponentType) => {
  return () => {
    const modal = useModal(component);
    return {
      open: modal.open<TData>,
      close: modal.close,
    };
  };
};
