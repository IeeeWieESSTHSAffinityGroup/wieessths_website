import './header.css';
import momos from "../../public/momos.png"
import Image from 'next/image';

export default function About() {
  return (
    <div id="about" className="md:max-lg:px-10  sm:max-md:px-10 sm:px-10 lg:px-40  lg:max-xl:px-40 max-xl:px-100 max-sm:py-10 lg:max-xl:pt-40 lg:pt-40 md:max-lg:py-40
    sm:max-md:py-15 pb-0 flex flex-col items-center justify-center  ">
      <section className="  align-center flex items-center max-md:text-center max-sm:text-center sm:text-center  md:text-center lg:justify-center w-full max-md:w-100 max-sm:w-100 lg:max-xl:w-100 lg:w-80 ">
        <div className=" ">
          <h1 className="fontheader lg:font-bold font-color lg:mb-7 text-start lg:text-6xl md:max-lg:text-4xl lg:max-xl:text-6xl  max-sm:text-sm sm:max-md:text-3xl">
           What Is IEEE WIE ESSTHS AG
          </h1>
          <h1 className="lg:text-xl md:text-md max-sm:text-sm text-black font-light  text-start lg:font-normal sm:max-md:text-sm">
       Women in Engineering (WIE) is one of the largest international professional organizations dedicated to promoting women engineers and inspiring young girls to pursue careers in science, technology, engineering, and mathematics (STEM). In this spirit, the IEEE WIE ESSTHS Affinity Group, founded in 2021, has grown into a dynamic community of over 230 members. We are committed to empowering women in STEM by fostering inclusivity, developing technical and leadership skills, and creating meaningful social impact within our university and beyond.
          </h1>
        </div>
        <div className="  flex items-center justify-center">
            <div className="relative lg:max-xl:h-120 lg:max-xl:w-80
            max-xl:w-80 lg:h-120 lg:w-70 md:h-100 md:w-50 md:max-lg:h-100 md:max-lg:w-50 sm:w-50 sm:h-60 max-sm:w-20 max-sm:h-60 max-md:w-50 max-md:h-60 flex items-center justify-center  ">
                            <div
                              className="flex items-center justify-center"
                              style={{ position: 'relative', width: '100%', height: '100%' }}
                            >
                         
                                <Image
                                  src={momos}
                                  loading="lazy"
                                  alt="menu"
                                  layout="fill"
                                  objectFit="cover"
                                />
                              
                            </div>
                          </div>
        </div>
      </section>
    </div>
  );
}
