import React, { useState, useContext, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const AppContext = React.createContext();
export const useApp = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  // User
  const { user } = useAuth0();
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    if (user) {
      // TODO: dkulak: make this use real users once user section is done
      setCurrentUser({ ...user, id: "af400afa-6247-4313-9d8a-738a3633db83" });
    }
  }, [user]);

  // Toast
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastSeverity, setToastSeverity] = useState("success");

  const doToast = (severity, message) => {
    setToastMessage(message);
    setToastSeverity(severity);
    setToastOpen(true);
  };

  const toastValues = {
    toastOpen,
    toastMessage,
    toastSeverity,
    setToastOpen,
    setToastMessage,
    setToastSeverity,
    doToast,
  };

  // Confirm Dialog
  const [confirmDialogKey, setConfirmDialogKey] = useState(null);
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);
  const [confirmDialogPayload, setConfirmDialogPayload] = useState(null);
  const [confirmDialogCallback, setConfirmDialogCallback] = useState(
    async () => {}
  );

  const confirmationDialogValues = {
    confirmDialogKey,
    setConfirmDialogKey,
    confirmDialogOpen,
    setConfirmDialogOpen,
    confirmDialogPayload,
    setConfirmDialogPayload,
    confirmDialogCallback,
    setConfirmDialogCallback,
  };

  return (
    <AppContext.Provider
      value={{
        currentUser,
        ...toastValues,
        ...confirmationDialogValues,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
