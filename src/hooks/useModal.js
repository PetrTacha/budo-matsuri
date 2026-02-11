import { useState, useCallback, useEffect } from "react";

/**
 * Custom hook for managing modal state with URL parameter synchronization
 * @param {string} paramName - The URL parameter name to sync with (e.g., "ucinkujici")
 * @returns {object} Modal state and control functions
 */
export const useModal = (paramName = "modal") => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const openModal = useCallback((data) => {
    setModalData(data);
    setIsOpen(true);
    
    // Update URL if data has a url property
    if (data?.url && typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.set(paramName, data.url);
      window.history.pushState({}, document.title, url.toString());
    }
  }, [paramName]);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    
    // Remove URL parameter
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.delete(paramName);
      window.history.replaceState({}, document.title, url.toString());
    }
    
    // Delay clearing modal data to allow exit animation
    setTimeout(() => {
      setModalData(null);
    }, 200);
  }, [paramName]);

  return { 
    isOpen, 
    modalData, 
    openModal, 
    closeModal,
    setModalData 
  };
};
