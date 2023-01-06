import { useState } from "react";

export const useModal = () => {
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const toggle = () => setIsOpen(!modalIsOpen);
  return {
    modalIsOpen,
    toggle,
    setIsOpen,
  };
};
