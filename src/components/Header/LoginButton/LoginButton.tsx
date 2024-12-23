'use client';

import React from 'react';
import Button from '@/components/Buttons/Button';
import { signIn, signOut, useSession } from "next-auth/react";

const LoginButton = () => {
  const { data: session } = useSession();

  return (
    <Button
      text={session?.user?.name ? 'Logout' : 'Login'}
      className="max-h-[36px] px-5 py-2 bg-white text-indigo-950 text-sm font-matteo font-bold tracking-wider border border-[#6C7AF6] uppercase"
      onClick={() => {
        session?.user?.name ? signOut() : signIn();
      }}
    />
  );
};

export default LoginButton;
