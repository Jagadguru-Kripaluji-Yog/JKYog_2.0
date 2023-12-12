'use client';

import { FC, ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { AuthContext } from '../auth/auth-context';

type ModalContextType = {
  open: boolean;
  handleModalOpen: (isOpen: boolean) => void;
};

export const ModalContext = createContext<ModalContextType>({ open: false, handleModalOpen: () => {} });

export const ModalProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const { isAuth } = useContext(AuthContext);

  useEffect(() => {
    if (isAuth) {
      setOpen(false);
    }
  }, [isAuth]);

  const handleModalOpen = (isOpen: boolean) => setOpen(isOpen);

  return <ModalContext.Provider value={{ open, handleModalOpen }}>{children}</ModalContext.Provider>;
};
