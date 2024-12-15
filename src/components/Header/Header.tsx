'use client';

import React from 'react';
import Link from 'next/link';
import Logo from '@/components/Header/Logo/Logo';
import Button from '@/components/Buttons/Button';
import LoginButton from '@/components/Header/LoginButton/LoginButton';
import { useUser } from '@auth0/nextjs-auth0/client';
import { useDiamondContext } from '@/context/diamonds';
import DiamondIcon from '@/assets/images/diamond.png';
import Image from "next/image";

const Header = () => {
  const { user } = useUser();
  const { diamondBalance } = useDiamondContext(); // Fetch diamond balance from context
  const nickname = user?.nickname || null;

  return (
    <header className="bg-[#8D3535] border-b border-[#adadad]">
      <div className="mx-auto max-w-[1440px] h-[80px] px-5 py-3 flex justify-between items-center">
        <nav className="flex items-center space-x-20 text-sm font-medium text-white uppercase">
          <Link className="flex items-center space-x-2" href="/">
            <Logo />
            <span>One Outs</span>
          </Link>

          <div className="space-x-7 font-matteo font-normal">
            <Link href="/games" className="font-matteo font-normal">
              Games
            </Link>
            <Link href="/stores" className="">
              Stores
            </Link>
            <Link href="/leaderboard" className="">
              LeaderBoard
            </Link>
          </div>
        </nav>

        <div className="flex items-center space-x-4">
          {nickname && (
            <>
              <span className="text-white">Hi, {nickname}</span>
              <Image src={DiamondIcon} alt="Diamond" height={50} />
              <div className="text-white">Diamonds: {diamondBalance}</div>
              <Button
                text="BUY DIAMONDS"
                className="max-h-[36px] px-5 py-2 bg-gradient-to-r from-[#43CEBD] to-[#6FB5E9] text-white text-sm border-none font-matteo font-bold tracking-wider"
                href="/diamonds"
              />
            </>
          )}
          {!nickname && <p className="text-white">Sign in to your account to continue.</p>}
          <LoginButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
