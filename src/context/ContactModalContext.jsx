import { useState, createContext, useContext } from "react";

const ContactModalContext = createContext();

export const ToggleContactModal = ({ children }) => {
  const [openContactModal, setOpenContactModal] = useState(false);

  return (
    <ContactModalContext.Provider
      value={{ openContactModal, setOpenContactModal }}
    >
      {children}
    </ContactModalContext.Provider>
  );
};

export const useToggleContactModal = () => {
  return useContext(ContactModalContext);
};
