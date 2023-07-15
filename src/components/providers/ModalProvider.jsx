import { createContext } from "react";
import { useState } from "react";
import React from "react";

export const ModalContext = createContext();
export const ModalNavigate = createContext();

export const ModalProvider = ({ children }) => {
  const [showReservTableModal, setShowReservTableModal] = useState(false);

  const handleShowReservTableModal = () => {
    setShowReservTableModal(true);
  };
  const handleHideReservTableModal = () => {
    setShowReservTableModal(false);
  };
  return (
    <ModalContext.Provider
      value={{
        showReservTableModal,
        setShowReservTableModal,
        handleShowReservTableModal,
        handleHideReservTableModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const ModalNavigation = ({ children }) => {
  const [showNavigateModal, setShowNavigateModal] = useState(false);

  const handleShowNavigateModal = () => {
    setShowNavigateModal(true);
  };
  const handleHideNavigateModal = () => {
    setShowNavigateModal(false);
  };
  return (
    <ModalNavigate.Provider
      value={{
        showNavigateModal,
        setShowNavigateModal,
        handleShowNavigateModal,
        handleHideNavigateModal,
      }}
    >
      {children}
    </ModalNavigate.Provider>
  );
};
