'use client';
import { useState } from 'react';
import Image from 'next/image';
import profilePic from '../../public/logo.png';
import menu from '../../public/Menu.svg';

import './nav.css';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="  py-16">
        <div className="flex w-full flex-nowrap max-sm:justify-center  md:justify-center lg:justify-center  ">
  
          <div className="max-md:hiddden px-40 w-full max-sm:hidden sm:hidden md:block lg:block">
            <div className="bg-white  border-[#CB618C] border-2  flex flex-row justify-between gap-14 rounded-full p-4 md:gap-5 lg:gap-14 items-center">
                    <div className="relative h-12 w-20 ">
              
                  <a to="/">
                    <Image
                      loading="lazy"
                      src={profilePic}
                      className=" "
                      alt="IEEE ESSTHS"
                      layout="fill"
                      objectFit="contain"
                    />
                  </a>
               
              </div>

                    <div className="flex flex-1/2 flex-nowrap max-sm:justify-center  md:justify-center lg:justify-center gap-4 fontheader text-4xl ">
              <a href="#about" className="md:text-2xl cursor-pointer max-sm:text-sm/6 sm:text-sm">
                About
              </a>

              <a href="#about" className="md:text-2xl max-sm:text-sm/6 sm:text-sm" aria-current="About">
                Domain
              </a>
          
              <a href="#activities" className="md:text-2xl max-sm:text-sm/6 sm:text-sm">
                Activities
              </a>
              <a className="md:text-2xl max-sm:text-sm/6 sm:text-sm">Team</a>
            
        
          
             
            
          </div>
           <a
                href="https://www.facebook.com/profile.php?id=100068599066993"
                className="bg-[#CB618C] flex cursor-pointer text-white flex-row justify-between gap-5 rounded-full p-5 md:mt-0 md:flex-row md:border-0 md:text-sm md:font-medium dark:border-gray-700"
                target="_blank"
              >
                Contact Us
              </a>
            </div>
            
          </div>

          <div className="w-full rounded-2xl max-lg:hidden max-md:hidden max-sm:block sm:block md:hidden">
            <div className="flex w-full gap-2">
              <div className="bg-white  border-[#CB618C] border-2 flex w-full justify-between rounded-4xl p-2">
                <div className="w-40">
                  <div
                    className="flex items-center"
                    style={{ position: 'relative', width: '100%', height: '2rem' }}
                  >
                    <a to="/">
                      <Image
                        loading="lazy"
                        src={profilePic}
                        className=" "
                        alt="IEEE ESSTHS"
                        layout="fill"
                        objectFit="contain"
                      />
                    </a>
                  </div>
                </div>
                <div className="relative h-5 w-20">
                  <div
                    className="flex items-center justify-center"
                    style={{ position: 'relative', width: '100%', height: '100%' }}
                  >
                    <div className="menu z-10 p-4" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                      <Image
                        src={menu}
                        loading="lazy"
                        alt="menu"
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="flex items-center gap-2 ">
						<div className="hidden w-auto items-center justify-between lg:flex">
							<ul className="flex flex-col rounded-lg border border-gray-100 p-4 dark:border-gray-700 md:mt-0 md:flex-row md:border-0 md:text-sm md:font-medium">
								
				
								 <li>
									<a
										href="#"
										className="block rounded bg-blue-700 py-2 pl-3 pr-4 text-white  md:bg-transparent md:p-0 md:text-blue-700"
										aria-current="page"
									>
										Keynote
									</a>
								</li>
								<li>
									<a
										href="#"
										className="block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
									>
										Stage 
									</a>
								</li> 
							</ul>
						</div>

			

						
					</div>  */}
        </div>
      </nav>

      {isMenuOpen && (
        <div className="lg:hidden">
          <div
            className="bg-white font-color font-bold text-3xl border-[#763851] border-2 rounded-2xl fixed top-0 z-10 flex h-full w-full flex-col justify-center gap-14 p-4 backdrop-blur-xl max-sm:items-center max-sm:justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
           

            <a href="#about" className="md:text max-sm:text-sm/6 sm:text-sm" aria-current="About">
              About
            </a>
            <a href="#value" className="md:text max-sm:text-sm/6 sm:text-sm">
              Domain
            </a>
            <a href="#activities" className="md:text max-sm:text-sm/6 sm:text-sm">
              Activities
            </a>
           
              <a
                href="https://www.facebook.com/profile.php?id=100068599066993"
                 className="md:text max-sm:text-sm/6 sm:text-sm"
                target="_blank"
              >
                Contact Us
              </a>
          </div>
        </div>
      )}
    </>
  );
}
