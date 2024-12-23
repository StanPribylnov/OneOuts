'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Logo from '@/components/Header/Logo/Logo';
import Button from '@/components/Buttons/Button';
import LoginButton from '@/components/Header/LoginButton/LoginButton';
import { useDiamondContext } from '@/context/diamonds';
import DiamondIcon from '@/assets/images/diamond.png';
import Image from 'next/image';
import CloseIcon from '@/assets/icons/close.svg';
import BurgerIcon from '@/assets/icons/burger.svg';
import { useSession } from 'next-auth/react';

const Header =  () => {
  const { diamondBalance } = useDiamondContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session } = useSession();

  return (
    <header className="bg-[#8D3535] border-b border-[#adadad]">
      <div className="container flex ustify-between px-5 py-3">
        {/* Logo and Mobile Menu Toggle */}
        <div className="flex items-center space-x-4">
          <Link className="flex items-center space-x-2" href="/">
            <Logo />
            <span className="hidden lg:inline text-white uppercase">One Outs</span>
          </Link>
          <button
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? (
              <CloseIcon className="w-6 h-6 " />
            ) : (
              <BurgerIcon className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Navigation (Desktop) */}
        <nav className="hidden lg:flex items-center space-x-7 text-sm ml-10 font-medium text-white uppercase">
          <Link href="/games" className="font-matteo font-normal">
            Games
          </Link>
          <Link href="/stores" className="font-matteo font-normal">
            Stores
          </Link>
          <Link href="/leaderboard" className="font-matteo font-normal">
            Leaderboard
          </Link>
        </nav>

        {/* User Info */}
        <div className="hidden lg:flex mt-5 items-center space-x-4 absolute right-5">
          {session?.user?.name ? (
            <>
              <span className="text-white">Hi, {session?.user?.name}</span>
              <Image src={DiamondIcon} alt="Diamond" height={20} width={20} />
              <div className="text-white">Diamonds: {diamondBalance}</div>
              <Button
                text="BUY DIAMONDS"
                className="max-h-[36px] px-5 py-2 bg-gradient-to-r from-[#43CEBD] to-[#6FB5E9] text-white text-sm font-matteo font-bold tracking-wider"
                href="/diamonds"
              />
            </>
          ) : (
            <p className="text-white">Sign in to your account to continue.</p>
          )}
          <LoginButton />
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#8D3535] px-5 py-3 text-white">
          <nav className="flex flex-col items-center space-y-4"> {/* Center menu items */}
            <Link href="/games" className="font-matteo font-normal">
              Games
            </Link>
            <Link href="/stores" className="font-matteo font-normal">
              Stores
            </Link>
            <Link href="/leaderboard" className="font-matteo font-normal">
              Leaderboard
            </Link>
          </nav>
          <div className="flex flex-col items-center space-y-4 mt-4">
            {session?.user?.name ? (
              <>
                <span>Hi, {session?.user?.name}</span>
                <div className="flex items-center space-x-2">
                  <Image src={DiamondIcon} alt="Diamond" height={20} width={20} />
                  <span>Diamonds: {diamondBalance}</span>
                </div>
                <Button
                  text="BUY DIAMONDS"
                  className="w-full px-5 py-2 bg-gradient-to-r from-[#43CEBD] to-[#6FB5E9] text-white text-sm font-matteo font-bold tracking-wider"
                  href="/diamonds"
                />
              </>
            ) : (
              <p>Sign in to your account to continue.</p>
            )}
            <LoginButton />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
