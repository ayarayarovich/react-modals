import * as React from "react";
import { ComponentType, Fragment } from "react";

import { ModalInstanceProvider } from "./ModalInstanceProvider";
import { useModalInternal } from "./ModalProvider";

interface ModalRendererProps {
  Component: ComponentType;
  ComponentWrapper?: ComponentType;
}

export const ModalRenderer = ({ Component, ComponentWrapper }: ModalRendererProps) => {
  const { getComponentInstances } = useModalInternal();

  const insts = getComponentInstances(Component);

  const Wrapper = ComponentWrapper ?? Fragment;

  return (
    <>
      {insts.map((inst) => (
        <ModalInstanceProvider key={inst.id} data={inst.data} isOpen={inst.isOpen} Component={Component}>
          <Wrapper>
            <Component />
          </Wrapper>
        </ModalInstanceProvider>
      ))}
    </>
  );
};
