import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";

import { ModalOverlay } from "./Modal.styled";

const Modal = ({ children, closeModal }) => {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKeyDown = (event) => {
      if (event.keyCode === 27) {
        setIsClosing(true);
        setTimeout(() => {
          closeModal();
          setIsClosing(false);
        }, 300);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeModal]);

  const handleClickOutside = (event) => {
    if (event.target === event.currentTarget) {
      setIsClosing(true);
      setTimeout(() => {
        closeModal();
        setIsClosing(false);
      }, 300);
    }
  };

  return createPortal(
    <ModalOverlay onClick={handleClickOutside}>{children}</ModalOverlay>,
    document.body
  );
};

export default Modal;
