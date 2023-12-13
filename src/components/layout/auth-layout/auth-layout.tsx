'use client';

import { FC, ReactNode, useEffect } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/src/zustand/auth-store';
import { useModalStore } from '@/src/zustand/modal-store';

type AuthLayoutProps = {
  accessToken?: string;
  children: ReactNode;
};

export const AuthLayout: FC<AuthLayoutProps> = ({ accessToken, children }) => {
  const supabase = createClientComponentClient();
  const router = useRouter();
  const setAuth = useAuthStore((state) => state.setAuth);
  const handleModalOpen = useModalStore((state) => state.handleModalOpen);

  useEffect(() => {
    const {
      data: { subscription: authListener },
    } = supabase.auth.onAuthStateChange((_, session) => {
      if (session?.access_token !== accessToken) {
        router.refresh();
      }
      setAuth(!!session?.user);

      if (!!session?.user) {
        handleModalOpen(false);
      }
    });

    return () => {
      authListener?.unsubscribe();
    };
  }, [accessToken, supabase, router, setAuth, handleModalOpen]);

  return children;
};
