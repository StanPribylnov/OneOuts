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
    <footer className="bg-[#363839] text-white pt-10 pb-8">
      <div className="max-w-[1192px] mx-auto">
        {/*Logo & Button*/}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-white font-medium">
              Stay updated about most important games and announces
            </p>
          </div>
          <div>
            <Button
              className="text-indigo-950 bg-white text-base w-[200px]"
              text="LEARN MORE"
            />
          </div>
        </div>

        {/*Divider*/}
        <div className="w-full h-[1px] mt-10 mb-11 bg-white opacity-30"></div>

        {/*Social & navigation*/}
        <div className="flex justify-between items-stretch">
          {/*SOCIAL Links*/}
          <div className="mr-14">
            <h5 className="text-white font-medium text-2xl">Follow us on</h5>

            <div className="grid grid-cols-3 gap-x-10 gap-y-5 mt-8 mb-11">
              <FacebookIcon className="h-5 fill-white" />
              <TwitterIcon className="h-5 fill-white" />
              <LinkedinIcon className="h-5 fill-white" />
              <InstagramIcon className="h-5 fill-white" />
              <YoutubeIcon className="h-5 fill-white" />
            </div>

            <Logo />
          </div>

          {/*Navigation*/}
          <div className="grow grid grid-cols-3 gap-y-4 gap-x-2 text-white pl-20 border-l border-white/30">
            <div>
              <p className="mb-2.5 text-lg">Categories</p>
              <div className="mb-1">
                <Link href="/" className="uppercase text-[#FC876D]">
                  Internet
                </Link>
              </div>
              <div className="mb-1">
                <Link href="/" className="uppercase text-[#2CB680]">
                  Business
                </Link>
              </div>
              <div className="mb-1">
                <Link href="/" className="uppercase text-[#907CFF]">
                  Chaos
                </Link>
              </div>
              <div className="mb-1">
                <Link href="/" className="uppercase text-[#ECB731]">
                  Newsletter
                </Link>
              </div>
              <div className="mb-1">
                <Link href="/" className="uppercase text-[#907CFF]">
                  Yesterday
                </Link>
              </div>
            </div>

            <div>
              <p className="mb-2.5 text-lg">Subscription</p>
              <div className="mb-1">
                <Link href="/">Individual Plans</Link>
              </div>
              <div className="mb-1">
                <Link href="/">Corporate Plans</Link>
              </div>
              <div className="mb-1">
                <Link href="/">Student Plans</Link>
              </div>
              <div className="mb-1">
                <Link href="/">Gifting</Link>
              </div>
            </div>

            <div>
              <p className="mb-2.5 text-lg">Company</p>
              <div className="mb-1">
                <Link href="/">About</Link>
              </div>
              <div className="mb-1">
                <Link href="/">Leadership</Link>
              </div>
              <div className="mb-1">
                <Link href="/">Investors</Link>
              </div>
              <div className="mb-1">
                <Link href="/">Team</Link>
              </div>
              <div className="mb-1">
                <Link href="/">Editorial code of conduct</Link>
              </div>
            </div>

            <div>
              <div className="mb-1 max-w-[170px]">
                <Link href="/">The One Outs</Link>
              </div>
            </div>

            <div>
              <div className="mb-1">
                <Link href="/">Collaborate</Link>
              </div>
              <div className="mb-1">
                <Link href="/">Contact Us</Link>
              </div>
              <div className="mb-1">
                <Link href="/">FAQs</Link>
              </div>
            </div>

            <div>
              <div className="mb-1">
                <Link href="/">Privacy Policy</Link>
              </div>
              <div className="mb-1">
                <Link href="/">Terms and Conditions</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 space-x-5">
          <span className="text-sm">©2024 Stany P</span>
          <span className="text-xs text-white/80">
            some ip address
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
