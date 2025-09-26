import Header from '@/components/header';
import About from '@/components/about';
import ExCom from '@/components/excom';
import WieTunisia from '@/components/wieTunisia'
import Values from '@/components/values';
import UpEvents from '@/components/activities';
import { upevents } from '../data/events';

import ContactPage from '@/components/location';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <>
      <div className="w-full">
        {/* <Navigation /> */}
        <Header />
      </div>
 <div className='bgColor'> <div className="max-md:px-10 py-8 max-sm:px-10 sm:px-10 md:px-10 lg:px-16 lg:py-8"><About />
 
       <WieTunisia />
 </div></div>
      <div className="max-md:px-10 max-sm:px-10 sm:px-10 md:px-10 lg:px-16 lg:py-8">
        <main className="item-center flex w-full flex-col content-center justify-center lg:gap-20 md:gap-15 sm:gap-10 max-sm:gap-5">
       
          
        
          
      
          <Values />
          <UpEvents chapter={upevents} />
          <ExCom />
          <ContactPage />
        </main>
      </div>
      <footer className="w-full">
        {' '}
        <Footer />{' '}
      </footer>
    </>
  );
}
