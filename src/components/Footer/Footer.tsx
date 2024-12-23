import React from 'react';
import Button from '@/components/Buttons/Button';

import FacebookIcon from '@/assets/icons/facebook-2.svg';
import TwitterIcon from '@/assets/icons/twitter.svg';
import LinkedinIcon from '@/assets/icons/linkedin.svg';
import InstagramIcon from '@/assets/icons/instagram.svg';
import YoutubeIcon from '@/assets/icons/youtube.svg';
import Link from 'next/link';
import Logo from "@/components/Header/Logo/Logo";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-6">
      <div
        className="container mx-auto px-4 flex flex-col items-center justify-between space-y-4 xs:px-6 md:flex-row md:space-y-0">
        <div className="flex items-center">
          <Logo />
          {/*<img src="/path-to-your-logo.png" alt="Logo" className="h-10 w-10 xs:h-12 xs:w-12 xl:h-14 xl:w-14" />*/}
        </div>

        <div className="text-center text-sm xs:text-base xl:text-lg">
          Created by <span className="text-white font-semibold">Stan</span>
        </div>

        <div>
          <a
            href="https://github.com/StanPribylnov/OneOuts/tree/main"
            target="_blank"
            className="text-blue-400 hover:text-blue-600 transition duration-300 text-sm xs:text-base xl:text-lg"
            rel="noopener noreferrer"
          >
            View GitHub Repo
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
