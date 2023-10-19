"use client";

import { useSession, SessionProvider } from "next-auth/react";

interface SessionShowcaseProps {
  children: React.ReactNode;
}

const AuthProvider = ({ children }: SessionShowcaseProps) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;
