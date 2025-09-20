import './header.css';
import momos from "../../public/momos.png"
import Image from 'next/image';

export default function About() {
  return (
    <div id="about" className="md:px-20 sm:px-10 lg:px-40 max-sm:py-10 py-40 pb-0 flex flex-col items-center justify-center  ">
      <section className="  align-center flex items-center max-md:text-center max-sm:text-center sm:text-center  md:text-center lg:justify-center w-full max-md:w-100 max-sm:w-100 ">
        <div className=" ">
          <h1 className="fontheader font-color   lg:mb-7 text-start lg:text-6xl md:text-4xl sm:text-5xl   max-sm:text-sm">
           What Is IEEE WIE ESSTHS AG
          </h1>
          <h1 className="lg:text-xl md:text-md max-sm:text-sm text-black font-light  text-start lg:font-normal">
        Women in Engineering (WIE) is one of the largest international professional organizations dedicated to promoting women engineers inspiring young girls to pursue careers in science, technology, engineering, and mathematics (STEM).
          </h1>
        </div>
        <div className="  flex items-center justify-center">
            <div className="relative lg:h-120 lg:w-100 md:h-100 md:w-50 sm:w-50 sm:h-60 max-sm:w-20 max-sm:h-60 max-md:w-50 max-md:h-60 flex items-center justify-center">
                            <div
                              className="flex items-center justify-center"
                              style={{ position: 'relative', width: '100%', height: '100%' }}
                            >
                         
                                <Image
                                  src={momos}
                                  loading="lazy"
                                  alt="menu"
                                  layout="fill"
                                  objectFit="contain"
                                />
                              
                            </div>
                          </div>
        </div>
      </section>
    </div>
  );
}
