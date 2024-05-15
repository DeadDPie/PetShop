import React from "react";

import { Portal } from "../Portal/Portal";

export interface ModalProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const Modal = ({ title, className, children }: ModalProps) => {
  return (
    <Portal>
      <div className={`wrapper styles ${className}`}>
        <div className="title styles">{title}</div>
        {children}
      </div>
    </Portal>
  );
};
