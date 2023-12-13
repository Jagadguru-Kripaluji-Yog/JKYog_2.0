import { create } from 'zustand';

type ModalStore = {
  open: boolean;
  handleModalOpen: (open: boolean) => void;
};

export const useModalStore = create<ModalStore>((set) => ({
  open: false,
  handleModalOpen: (open) => {
    set({ open });
  },
}));
