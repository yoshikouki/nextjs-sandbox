"use client";

import { signIn, useSession } from "next-auth/react";

const SessionShowcase = () => {
  const { data: session, status } = useSession();

  return (
    <>
      <h2>SessionShowcase</h2>

      {status === "authenticated" && <p>Signed in as {session?.user?.email}</p>}

      <button onClick={() => signIn("google")} className="py-4 px-8 border-8">
        Sign in with Google
      </button>

      <button onClick={() => signIn("line")} className="py-4 px-8 border-8">
        Sign in with Line
      </button>
    </>
  );
};

export default SessionShowcase;
