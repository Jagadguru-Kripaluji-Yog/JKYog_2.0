'use client';

import { FC, ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import { ModalContext } from '../modal/modal-context';

type AuthProviderProps = {
  accessToken?: string;
  children: ReactNode;
};

type AuthContextType = {
  isAuth: boolean;
  signOut: () => void;
};

export const AuthContext = createContext<AuthContextType>({ isAuth: false, signOut: () => {} });

export const AuthProvider: FC<AuthProviderProps> = ({ accessToken, children }) => {
  const supabase = createClientComponentClient();
  const router = useRouter();

  const [isAuth, setIsAuth] = useState(false);

  const signOut = () => supabase.auth.signOut();

  useEffect(() => {
    const {
      data: { subscription: authListener },
    } = supabase.auth.onAuthStateChange((_, session) => {
      if (session?.access_token !== accessToken) {
        router.refresh();
      }
      console.log(!!session?.user, 'user');
      setIsAuth(!!session?.user);
    });

    return () => {
      authListener?.unsubscribe();
    };
  }, [accessToken, supabase, router]);

  return <AuthContext.Provider value={{ isAuth, signOut }}>{children}</AuthContext.Provider>;
};
