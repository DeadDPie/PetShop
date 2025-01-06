import React from "react";

import { Portal } from "../Portal/Portal";

export interface ModalProps {
  //title: string;
  children: React.ReactNode;
  className?: string;
  //setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Modal = ({ className, children }: ModalProps) => {
  return (
    <Portal>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50  ${className}`}
      >
        <div className="bg-white rounded-[20px] overflow-hidden shadow-xl ">
          {children}
        </div>
      </div>
    </Portal>
  );
};
