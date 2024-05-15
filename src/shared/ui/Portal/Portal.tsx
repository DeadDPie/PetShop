import { ReactNode } from "react";
import { createPortal } from "react-dom";

export interface PortalProps {
  children: ReactNode;
  element?: HTMLElement;
}

export const Portal = ({
  children,
  element = document.querySelector('[data-label="Home"]') as HTMLElement,
}: PortalProps) => {
  if (!element) {
    return createPortal(children, document.body);
  }

  return createPortal(children, element);
};

export default Portal;
