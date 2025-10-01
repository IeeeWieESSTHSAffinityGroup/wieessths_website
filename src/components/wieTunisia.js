import Image from 'next/image';
import essths from "../../public/ieee_essths.png"

export default function WieTunisia() {
  return (
       <div id="about" className="md:max-lg:px-20  sm:max-md:px-10 sm:px-10 lg:px-40  lg:max-xl:px-22 max-sm:py-4 lg:max-xl:py-20 md:max-lg:py-4 sm:max-md:py-4 pb-0 flex flex-col items-center justify-center  ">
    <section className="   align-center flex items-center max-md:text-center max-sm:text-center sm:text-center  md:text-center lg:justify-center w-full max-md:w-100 max-sm:w-100">
   
      <div className=" flex flex-col gap-4 py-2 max-sm:order-1  sm:order-1 lg:order-2">
        <h1 className="fontheader  font-color lg:mb-7 text-right lg:text-6xl md:text-4xl sm:max-md:text-3xl   max-sm:text-sm">
          IEEE ESSTHS Student Branch
        </h1>
     <h1 className="lg:text-xl md:text-md max-sm:text-xs
     sm:max-md:text-sm text-black font-light  text-end lg:font-normal">
        IEEE ESSTHS Student Branch, founded in 2020, is home to more than
							280 members, making it the largest Student Branch in Sousse, and
							7th in Tunisia Section. It encompasses 5 Technical Chapters: AESS,
							CS, IAS, PES, RAS, IES, and 2 Affinity Groups: SIGHT & WIE. We
							have had the honor of receiving more than 12 worldwide IEEE Awards
							across all fields through the dedication and commitment of each of
							our members.
      </h1>
        

      </div>
          <div className="  flex items-center justify-center">
                <div className="relative lg:max-xl:h-120 lg:max-xl:w-100 lg:h-120 lg:w-100 md:h-100 md:w-50 md:max-lg:h-100 md:max-lg:w-50 sm:w-50 sm:h-60 max-sm:w-20 max-sm:h-60 max-md:w-50 max-md:h-60 flex items-center justify-center">
                                <div
                                  className="flex items-center justify-center"
                                  style={{ position: 'relative', width: '100%', height: '100%' }}
                                >
                             
                                    <Image
                                      src={essths}
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
