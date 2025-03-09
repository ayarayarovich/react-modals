import { ComponentType, createContext, FC, PropsWithChildren, useCallback, useContext, useMemo, useState } from "react";

import { produce } from "immer";

const getId = (() => {
  let currentId = 0;
  const map = new WeakMap();

  return (object: object) => {
    if (!map.has(object)) {
      map.set(object, ++currentId);
    }

    return map.get(object);
  };
})();

const ModalContext = createContext<ModalProviderValue | null>(null);

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

export const ModalProvider: FC<ModalProviderProps> = ({ children }) => {
  const [instances, setInstances] = useState<Record<string, Instance[]>>({});

  const getKey = useCallback((component: ComponentType) => {
    return getId(component);
  }, []);

  const open = useCallback(
    (component: ComponentType, data: unknown) => {
      const componentKey = getKey(component);

      setInstances(
        produce((oldInsts) => {
          if (!oldInsts[componentKey]) {
            oldInsts[componentKey] = [];
          }

          const instances = oldInsts[componentKey];

          const lastInstance = instances[instances.length - 1];
          const nextId = (lastInstance?.id ?? 0) + 1;
          console.log(nextId);

          instances.push({
            id: nextId,
            data,
            isOpen: false,
          });

          for (const inst of instances) {
            if (!inst._scheduledForDeletion) {
              inst.isOpen = true;
              break;
            }
          }
        })
      );
    },
    [getKey]
  );

  const close = useCallback(
    (component: ComponentType) => {
      const componentKey = getKey(component);

      setInstances(
        produce((oldInsts) => {
          if (!oldInsts[componentKey]) {
            oldInsts[componentKey] = [];
          }

          oldInsts[componentKey] = oldInsts[componentKey].filter((v) => !v._scheduledForDeletion);

          const instances = oldInsts[componentKey];

          const currInst = instances[0];
          if (!currInst) return;
          currInst.isOpen = false;
          currInst._scheduledForDeletion = true;

          const nextInstance = instances[1];
          if (nextInstance) {
            nextInstance.isOpen = true;
          }
        })
      );
    },
    [getKey]
  );

  const getComponentInstances = useCallback(
    (Component: ComponentType) => {
      const componentKey = getId(Component);

      return instances[componentKey] ?? [];
    },
    [instances]
  );

  const value = useMemo(
    () => ({
      open,
      close,
      getComponentInstances,
    }),
    [close, getComponentInstances, open]
  );

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
};

export const useModal = (component: ComponentType) => {
  const { open: openComponent, close: closeComponent } = useContext(ModalContext) as ModalProviderValue;

  const open: <T = unknown>(data?: T) => void = (data) => {
    openComponent(component, data);
  };

  const close: () => void = () => {
    closeComponent(component);
  };

  return {
    open,
    close,
  };
};

export const useModalInternal = () => {
  return useContext(ModalContext) as ModalProviderValue;
};
