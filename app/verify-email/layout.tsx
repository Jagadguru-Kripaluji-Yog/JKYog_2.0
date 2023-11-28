import Link from 'next/link';
import React, { ReactNode } from 'react';

export const metadata = {
  title: 'Verify Email',
};

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <>{children}</>;
};

export default Layout;
