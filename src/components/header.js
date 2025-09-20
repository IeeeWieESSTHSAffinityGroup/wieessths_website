'use client';


import Navigation from '@/components/nav';




import './header.css';

import { HoverIcon } from '@/components/hovericon';

export default function Header() {

  return (
    
  
      <div className="background">
        <Navigation />
        <header className=" flex flex-row max-lg:flex-wrap-reverse max-md:flex-wrap-reverse max-sm:flex-wrap sm:flex-wrap-reverse md:justify-center lg:flex-nowrap lg:justify-center lg:px-14">
          <div className=" lg:w-full flex flex-1 max-md:flex-row sm:flex-row sm:justify-start sm:p-2 md:justify-start  lg:flex-col lg:justify-between ">
            <div className="flex flex-1 flex-col sm:justify-center lg:w-full lg:justify-between gap-2">
              <div className="flex gap-5 sm:item-center  md:flex-1 md:flex-col lg:flex-1 flex-col lg:justify-center">
                {' '}
                {/* Title */}
                <div className=" sm:item-center flex flex-col max-sm:items-center max-sm:justify-end md:justify-center lg:flex-1 lg:justify-center">
                  <span className=" animated-title z-5  
                  max-sm:leading-15 font-bold lg:leading-40 max-md:text-center max-sm:mb-4 max-sm:w-full max-sm:text-5xl md:mb-4 md:text-center lg:text-center lg:mb-8 lg:text-9xl">
                    <p className='fontheader font-color'>IEEE WIE ESSTHS AFFINITY GROUP</p>
                  </span>
                 {/* Solang +join us */}
                  <div className="flex max-sm:flex-col-reverse max-sm:items-center max-sm:justify-center sm:flex-col-reverse lg:justify-between">
               
                    <div className=" font-light text-black max-sm:w-full max-sm:text-center max-sm:text-sm sm:text-center max-sm:px-10 sm:px-10 sm:text-xs lg:mb-5 lg:text-center lg:text-2xl lg:leading-10 lg:w-full">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
                    </div>
                  </div>
                </div>
                 {/* media icons */}
                <div className="flex gap-2  lg:flex-row lg:justify-center lg:items-center flex-row md:justify-center  max-md:flex-col 
                
        
                max-md:justify-center max-sm:flex-1/7 max-sm:items-center    sm:flex-col sm:justify-start ">
                

                  <div className="relative flex flex-col items-center justify-center     ">
                    {' '}
                    <HoverIcon
                      objectfit="lg:p-2 md:p-4 max-sm:p-2 sm:p-3"
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
                      objectfit="lg:p-2 md:p-4 max-sm:p-2 sm:p-3"
                      className="flex cursor-pointer items-center justify-center rounded-full  border-1 border-[#CA608A] hover:bg-[#CA608A] max-sm:p-5 sm:p-5 md:p-9 lg:p-7"
                      href="https://www.instagram.com/ieee.aess.essths/"
                      src="Instagram.svg"
                      hoverSrc="Instagram_hover.svg"
                      alt="Instagram"
                    />{' '}
                  </div>

                
                </div>
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
