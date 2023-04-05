import {
  AppStore,
  modalCallbackUpdate,
  modalCheckPriceAutoUpdate,
  modalCheckPriceUpdate,
  modalOrderUpdate,
  modalQuestionManagerUpdate,
} from "@/pullstate";
import React, { useRef, useEffect } from "react";
import { GrClose } from "react-icons/gr";

interface RootModalProps {
  active: boolean;
  title: string;
  children: JSX.Element[] | JSX.Element;
  onClose: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const RootModal = ({ active, title, children, onClose }: RootModalProps) => {
  const rootRef = useRef(null);
  AppStore.useState((store) => store);
  useEffect(() => {
    const closeModal = (event: any) => {
      if (event.target === rootRef.current || event.keyCode === 27) {
        modalCallbackUpdate(false)
        modalCheckPriceAutoUpdate(false)
        modalCheckPriceUpdate(false)
        modalOrderUpdate(false)
        modalQuestionManagerUpdate(false)
      }
    };

    document.addEventListener("click", closeModal);
    document.addEventListener("keydown", closeModal);

    return () => {
      document.removeEventListener("click", closeModal);
      document.removeEventListener("keydown", closeModal);
    };
  }, []);
  return (
    <div ref={rootRef} className={!active ? "site-modal" : "site-modal active"}>
      <div className="site-modal__container">
        <button onClick={onClose} className="site-modal__close-btn">
          <GrClose color="#fff" stroke="#fff" className="site-modal__close-icon" />
        </button>
        <p className="site-modal__title">{title}</p>
        {children}
      </div>
    </div>
  );
};

export { RootModal };
