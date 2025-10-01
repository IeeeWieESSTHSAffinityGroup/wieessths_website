'use client'
import './values.css';


export default function Upcoming({ events }) {

  
	const sortedEvents = [...events]
		.filter((event) => event["Event Date"])
		.map((event) => ({
			...event,
			parsedDate: new Date(event["Event Date"]),
		}))
		.sort((a, b) => b.parsedDate - a.parsedDate);
  return (
    <section id="events">
      <div className="flex flex-col p-0  content-center items-center gap-10 lg:max-xl:px-0 sm:max-md:px-6  md:max-lg:px-8      lg:px-14">
        <div className="flex flex-col content-center items-center gap-2 max-sm:p-0 sm:p-0 lg:px-14 max-lg:px-10 md:px-10 ">
          <h2 className="fontheader  font-color  text-right lg:text-6xl md:text-4xl sm:text-5xl   max-sm:text-2xl font-bold">UpComing Events </h2>
          {/* <p className='text-black'>Fields Taht We tackle within our activities</p> */}
        </div>

        <div className=" mx-auto  max-w-6xl max-sm:max-w-full max-sm:grid-cols-1 max-sm:gap-6 sm:max-w-full sm:grid-cols-1 sm:gap-6 lg:grid-cols-3 lg:gap-6 ">
      <div className="relative w-full ">
  {/* Timeline line */}
 <div className="relative max-w-full mx-auto ">
  {/* Vertical Timeline Line */}
 <div className="relative w-full overflow-x-auto pb-8 ">
  {/* Horizontal Timeline Line */}
  <div className="absolute left-0 right-0 top-2 h-1 bg-gradient-to-r from-[#FF68A4] via-[#DC0089] to-[#CB618C] shadow-lg"></div>
  
  <div className="flex space-x-8 min-w-max px-8">
    {sortedEvents.map((value, index) => (
      <div key={index} className="relative flex flex-col items-center group">
        
        {/* Timeline Dot */}
        <div className="relative z-20 ">
          <div className="w-6 h-6 bg-gradient-to-br from-[#FF68A4] to-[#DC0089] rounded-full border-4 border-white shadow-xl group-hover:scale-125 group-hover:shadow-2xl transition-all duration-300"></div>
          {/* Pulsing animation */}
          <div className="absolute inset-0 w-6 h-6 bg-[#FF68A4] rounded-full animate-ping opacity-20 group-hover:opacity-40"></div>
        </div>

        {/* Glassmorphism Card */}
        <div className="relative w-80 bg-white/80 backdrop-blur-lg p-6 rounded-2xl border border-white/60 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden group-hover:scale-105">
          
          {/* Animated Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#FF68A4]/10 via-transparent to-[#DC0089]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Floating Elements */}
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#FF68A4]/10 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
          <div className="absolute -top-6 -left-6 w-20 h-20 bg-[#DC0089]/10 rounded-full group-hover:scale-150 transition-transform duration-700 delay-100"></div>

          {/* Content */}
          <div className="relative z-10">
            {/* Event Title */}
            <h3 className="font-bold text-xl text-gray-800 mb-3 group-hover:text-[#DC0089] transition-colors duration-300 text-center">
              {value['Event Title']}
            </h3>
            
            {/* Description */}
         <div className="relative">
              <div className="text-gray-600 leading-relaxed text-sm max-h-32 overflow-y-auto pr-2 custom-scrollbar">
                <p>{value['desrip']}</p>
              </div>
              
              {/* See More Button - Only shows if text is long */}
              {value['desrip'].length > 200 && (
                <button 
                  className="mt-3 text-[#DC0089] hover:text-[#FF68A4] font-medium text-sm flex items-center transition-colors duration-300 w-full justify-center"
                  onClick={(e) => {
                    e.stopPropagation();
                    // You can add a modal or expand functionality here
                    const card = e.target.closest('.relative');
                    const desc = card.querySelector('p');
                    desc.classList.toggle('line-clamp-3');
                    e.target.textContent = desc.classList.contains('line-clamp-3') ? 'See More' : 'See Less';
                  }}
                >
              See More 
                  <svg className="w-4 h-4 ml-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              )}
            </div>
            
            {/* Decorative Accent */}
            <div className="absolute top-4 right-4 w-2 h-2 bg-[#CB618C] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Bottom Gradient Bar */}
          <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#FF68A4] to-[#DC0089] group-hover:w-full transition-all duration-500 delay-200"></div>
        </div>

        {/* Connecting Lines Between Dots */}
        {index < sortedEvents.length - 1 && (
          <div className="absolute top-0 left-20 -right-8 h-0.5 bg-gradient-to-r from-[#FF68A4] to-[#DC0089] opacity-50 -z-10"></div>
        )}
      </div>
    ))}
  </div>
</div>
</div>
</div>
        </div>
      </div>
    </section>
  );
}

export const values = [
  {
    title: 'Excellence in complex systems ',
    content:
      'We focus on advancing the design, development, and operation of complex systems used in space, air, ocean, and ground environments.',
  },
  {
    title: 'Diversity and inclusion ',
    content:
      'We welcome people of all ages, cultures, and backgrounds, whether they work in theory, management, or practical applications.',
  },
  {
    title: 'Innovation and leadership',
    content:
      'We promote new ideas and technical excellence through conferences, publications, and industry partnerships.',
  }
];
