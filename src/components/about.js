import './header.css';
import momos from "../../public/momos.png"
import Image from 'next/image';

export default function About() {
  return (
    <div id="about" className="px-40 py-40 pb-0 flex flex-col items-center justify-center  ">
      <section className="  align-center grid items-center max-md:text-center max-sm:text-center sm:text-center md:grid-cols-16 md:text-center lg:justify-center  ">
        <div className="col-span-8 ">
          <h1 className="fontheader font-color   lg:mb-7 lg:text-start lg:text-6xl  ">
           What Is IEEE WIE ESSTHS AG
          </h1>
          <h1 className="text-md text-black font-light max-sm:text-center sm:text-center md:text-center  lg:text-start lg:font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.
          </h1>
        </div>
        <div className="col-span-8  flex items-center justify-center">
            <div className="relative h-120 w-100 flex items-center justify-center">
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
