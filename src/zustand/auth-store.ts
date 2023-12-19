import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { create } from 'zustand';

type AuthStore = {
  isAuth: boolean;
  isLoading: boolean;
  setAuth: (isAuth: boolean) => void;
  signOut: () => void;
};

const supabase = createClientComponentClient();

export const useAuthStore = create<AuthStore>((set) => ({
  isAuth: false,
  isLoading: true,
  setAuth: (isAuth) => {
    set({ isAuth });
    set({ isLoading: false });
  },
  signOut: () => supabase.auth.signOut(),
}));
