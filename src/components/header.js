'use client';


import Navigation from '@/components/nav';


import Image from 'next/image';

import './header.css';
import star from '../../public/star.svg';
import star2 from '../../public/star2.svg';

import { HoverIcon } from '@/components/hovericon';

export default function Header() {

  return (
    
  
      <div className="background ">
        <Navigation />
        <header className=" flex flex-row max-lg:flex-wrap-reverse max-md:flex-wrap-reverse max-sm:flex-wrap sm:flex-wrap-reverse md:justify-center lg:flex-nowrap lg:justify-center lg:px-14 ">
          <div className="w-full  lg:w-full max-lg:p-4 flex flex-1 max-md:flex-row sm:flex-row sm:justify-start sm:p-4 md:justify-start  lg:flex-col lg:justify-between ">
            <div className="w-full  flex flex-1 flex-col sm:justify-center lg:w-full lg:justify-between gap-2">
              <div className="flex gap-5 sm:item-center  md:flex-1 md:flex-col lg:flex-1 flex-col lg:justify-center">
                {' '}
                {/* Title */}
                <div className="  justify-center items-center flex flex-col max-sm:items-center max-sm:justify-center md:justify-center lg:flex-1 lg:justify-center  ">
               <span className="flex justify-between items-start text-center">
  {/* Left star */}
  <div className="flex flex-col relative h-auto lg:w-16 lg:max-xl:w-16 md:max-lg:w-12 sm:max-md:w-10 items-start max-sm:w-8">
    <a to="/">
      <Image
        loading="lazy"
        src={star}
        className="star-shine"
        alt="IEEE ESSTHS"
        objectFit="contain"
      />
    </a>
  </div>

  {/* Center text */}
  <div className="py-8">
    <p className="fontheader font-color font-bold text-4xl sm:max-md:text-6xl md:max-lg:text-6xl lg:text-6xl leading-tight lg:max-xl:text-6xl
    xl:text-8xl">
      IEEE ESSTHS WIE
      <br />
      AFFINITY GROUP
    </p>
  </div>

  {/* Right star */}
  <div className="flex flex-col relative h-auto lg:w-16 lg:max-xl:w-16 md:max-lg:w-12 sm:max-md:w-10 max-sm:w-8 items-end">
    <a to="/">
      <Image
        loading="lazy"
        src={star2}
        className="star-shine"
        alt="IEEE ESSTHS"
        objectFit="contain"
      />
    </a>
  </div>
</span>

                 {/* Solang +join us */}
                  <div className="flex max-sm:flex-col-reverse max-sm:items-center max-sm:justify-center sm:flex-col-reverse lg:justify-between">
               
                    {/* <div className=" font-light text-black max-sm:w-full max-sm:text-center max-sm:text-sm sm:text-center max-sm:px-10 sm:px-10 sm:text-xs lg:mb-5 lg:text-center lg:text-2xl lg:leading-10 lg:w-full">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
                    </div> */}
                  </div>
                </div>
                 {/* media icons */}
                {/* <div className="flex gap-2  lg:flex-row lg:justify-center lg:items-center flex-row md:justify-center  max-md:flex-col 
                
        
                max-md:justify-center max-sm:flex-1/7 max-sm:items-center    sm:flex-col sm:justify-center ">
                

                  <div className="relative flex flex-col items-center justify-center     ">
                    {' '}
                    <HoverIcon
                      objectfit="lg:p-2 md:p-4 max-sm:p-2 sm:p-2"
                      className="flex cursor-pointer items-center justify-center rounded-full border-1 border-[#CA608A] hover:bg-[#CA608A] max-sm:p-5 sm:p-5 md:p-9 lg:p-7"
                      href="https://www.facebook.com/profile.php?id=100068599066993"
                      src="Facebook.svg"
                      hoverSrc="Facebook_hover.svg"
                      alt="Facebook"
                    />
                  </div>

                  <div className="relative flex flex-col items-center justify-center    ">
                    {' '}
                    <HoverIcon
                      objectfit="lg:p-2 md:p-4 max-sm:p-2 sm:p-2"
                      className="flex cursor-pointer items-center justify-center rounded-full  border-1 border-[#CA608A] hover:bg-[#CA608A] max-sm:p-5 sm:p-5 md:p-9 lg:p-7"
                      href="https://www.instagram.com/ieee_wie_essths/"
                      src="Instagram.svg"
                      hoverSrc="Instagram_hover.svg"
                      alt="Instagram"
                    />{' '}
                  </div>

                
                </div> */}
              </div>
            </div>
          </div>
          {/* <div className="astro content-right items-right w-full bg-amber-900 max-lg:hidden">
            <div className="relative h-100">
              <div
                className="items-right flex"
                style={{ position: 'relative', width: '100%', height: '100%' }}
              >
                <Image
                  className="astro h-auto w-500 bg-none"
                  src={astro}
                  loading="lazy"
                  alt="icon"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
          </div> */}
        </header>
      </div>
    
  );
}
