'use client';

import React from 'react';
import Button from '@/components/Buttons/Button';
import { useUser } from '@auth0/nextjs-auth0/client';

const LoginButton = () => {
  const { user, isLoading } = useUser();
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Button
      text={user ? 'Logout' : 'Login'}
      className="max-h-[36px] px-5 py-2 bg-white text-indigo-950 text-sm font-matteo font-bold tracking-wider border border-[#6C7AF6] uppercase"
      onClick={() => {
        window.location.href = user
          ? '/api/auth/logout'
          : '/api/auth/login';
      }}
    />
  );
};

export default LoginButton;
