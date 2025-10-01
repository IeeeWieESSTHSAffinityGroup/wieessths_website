import './values.css';

import Image from 'next/image';

export default function Awards({ awards }) {

 
  return (
    <section id="value">
      <div className="flex flex-col p-0  content-center items-center gap-10 lg:max-xl:px-0 sm:max-md:px-6  md:max-lg:px-8     lg:px-14">
        <div className="flex flex-col content-center items-center gap-2 max-sm:p-0 sm:p-0 lg:px-14 max-lg:px-10 md:px-10 ">
          <h2 className="fontheader  font-color  text-right lg:text-6xl md:text-4xl sm:text-5xl   max-sm:text-2xl font-bold">Awards </h2>
          {/* <p className='text-black'>Fields Taht We tackle within our activities</p> */}
        </div>
<div className='flex flex-col align-middle items-center justify-center'><div className=" mx-auto grid max-w-6xl max-sm:max-w-auto max-sm:grid-cols-2 max-sm:gap-6 sm:max-w-full sm:grid-cols-2 sm:gap-6  content-center justify-center lg:gap-6">
          {awards.map((value, index) => (
            <div
              key={index}
              className={`card p-4 items-center relative flex flex-col justify-start rounded-2xl xl:gap-8 max-sm:gap-2 leading-2  max-lg:gap-4 md:gap-4 sm:gap-4  max-w-110
               max-sm:p-4  
             lg:max-xl:p-4 sm:max-md:p-6  md:max-lg:p-8  xl:p-4 lg:max-xl:bg-amber-400`}
            >
             <div className="relative lg:h-14 lg:w-20 h-12 w-20 ">
                          
                              <a to="/">
                                <Image
                                  loading="lazy"
                                  src={`${value.content}`}
                                  className=" "
                                  alt="IEEE ESSTHS"
                                  layout="fill"
                                  objectFit="contain"
                                />
                              </a>
                           
                          </div>
              <div className="font-bold text-[#763851] leading-7 lg:leading-10 text-center text-wrap sm:text-2xl lg:text-4xl  lg:max-xl:text-2xl sm:max-md:text-xl  md:max-lg:text-2xl   ">{value.title}</div>
          
            </div>
          ))}
        </div></div>
        
      </div>
    </section>
  );
}
