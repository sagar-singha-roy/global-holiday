"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { PACKAGE_DATA } from "@/data/packages";

const ModalContext = createContext(null);

export function ModalProvider({ children }) {
  const [activePackage, setActivePackage] = useState(null);
  const [lightboxData, setLightboxData] = useState(null);

  const openPackage = (keyOrData) => {
    if (typeof keyOrData === "string") {
      const data = PACKAGE_DATA[keyOrData];
      if (data) setActivePackage(data);
    } else if (keyOrData) {
      setActivePackage(keyOrData);
    }
  };

  const closePackage = () => setActivePackage(null);

  const openLightbox = (data) => {
    setLightboxData(data);
  };

  const closeLightbox = () => setLightboxData(null);

  // Close modals on Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closePackage();
        closeLightbox();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <ModalContext.Provider
      value={{
        activePackage,
        openPackage,
        closePackage,
        lightboxData,
        openLightbox,
        closeLightbox,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}
