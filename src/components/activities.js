'use client';
import React, { useEffect, Suspense, useRef, useState, useCallback } from 'react';
import { motion } from "framer-motion";
import './values.css';
import Image from 'next/image';


export default function UpEvents({ chapter }) {
  const [selectedEvent, setSelectedEvent] = useState(null);
	const [expanded, setExpanded] = useState(false);

	if (chapter.length === 0) return null;

	if (chapter.length === 0) return null;

	const sortedEvents = [...chapter]
		.filter((event) => event["Event Date"])
		.map((event) => ({
			...event,
			parsedDate: new Date(event["Event Date"]),
		}))
		.sort((a, b) => b.parsedDate - a.parsedDate);

	const loopedEvents = [
		sortedEvents[sortedEvents.length - 1],
		...sortedEvents,
		sortedEvents[0],
		sortedEvents[1],
	];

  return (
    <>
      {selectedEvent && (
				<div className="fixed inset-0 z-50 flex h-full w-full items-center justify-center  backdrop-blur-xl bg-opacity-50 ">
					<div
						className="absolute inset-0"
						onClick={() => setSelectedEvent(null)}
					></div>
					<motion.div
						initial={{ opacity: 0, scale: 0.95 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.3 }}
						className="relative z-50 mx-4 max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-lg bg-white p-4 text-center shadow-xl dark:bg-gray-900 sm:p-6"
					>
						<button
							onClick={() => setSelectedEvent(null)}
							className="absolute right-2 top-2 text-2xl font-bold text-gray-500 hover:text-gray-800 dark:hover:text-gray-300 sm:text-3xl cursor-pointer"
						>
							×
						</button>

						<div className="flex flex-col items-center gap-2">
							{/* Image */}
							{selectedEvent["Event_pdp"] && (
							
									  <div className="relative lg:h-70 lg:w-180 sm:max-md:h-60 sm:max-md:w-150 max-sm:h-50 max-sm:w-110 md:max-lg:w-180 md:max-lg:h-60">
											  
												  <a to="/">
													<Image
													  loading="lazy"
													  src={selectedEvent["Event_pdp"]}
													  className=" "
													  alt="event"
													  layout="fill"
													  objectFit="cover"
													/>
												  </a>
											   
											  </div>
											  
							)}
	{/* <img
									src={selectedEvent["Event_pdp"]}
									alt=""
									className="max-h-[20rem] w-full rounded-md object-cover sm:max-h-[20rem]"
									loading="lazy"
								/> */}
							{/* Title */}
							<h2 className="text-center text-2xl font-semibold text-gray-900 dark:text-white sm:text-3xl">
								{selectedEvent["Event Title"]}
							</h2>

							{/* Date and state */}
							<p className="text-sm text-gray-600 dark:text-gray-300 sm:text-base">
								{selectedEvent.parsedDate.toDateString()} – This activity is{" "}
								<span className="font-medium">{selectedEvent.State}</span>
							</p>

							{/* Description */}
						<div className="px-2 text-sm text-gray-700 dark:text-gray-200 sm:px-4 sm:text-base text-left w-full">
					<div
	className={`transition-all duration-300 ${
		expanded ? "max-h-[50vh] overflow-y-auto custom-scrollbar" : "line-clamp-4"
	}`}
>
	{selectedEvent["desrip"]}
</div>

						{/* Read More Button */}
						{selectedEvent["desrip"]?.length > 200 && (
							<button
								onClick={() => setExpanded(!expanded)}
								className=" text-sm font-medium text-grey-600 hover:underline dark:text-blue-400 cursor-pointer"
							>
								{expanded ? "Show less" : "Read more"}
							</button>
						)}
					</div>

							{/* Button */}
							<a
								href={selectedEvent["Event_link"]}
								target="_blank"
								rel="noreferrer"
								className=" inline-block  rounded-lg  px-6 py-3 font-medium text-white transition button sm:w-auto"
							>
								View Event
							</a>
						</div>
					</motion.div>
				</div>
			)}
       <section>
      <Actvities onExtend={setSelectedEvent} loopedEvents={loopedEvents} />
    </section>
    </>
   
  );
}

const Actvities = ({ loopedEvents, onExtend  }) => {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInteracted, setUserInteracted] = useState(false);
  const userScrollTimeoutRef = useRef(null);


	const goToPrevious = useCallback(() => {
		setCurrentIndex(
			(prev) => (prev - 1 + loopedEvents.length) % loopedEvents.length
		);
		setUserInteracted(true);
		if (userScrollTimeoutRef.current)
			clearTimeout(userScrollTimeoutRef.current);
		userScrollTimeoutRef.current = setTimeout(
			() => setUserInteracted(false),
			2000
		);
	}, [loopedEvents.length]);

	const goToNext = useCallback(() => {
		setCurrentIndex((prev) => (prev + 1) % loopedEvents.length);
		setUserInteracted(true);
		if (userScrollTimeoutRef.current)
			clearTimeout(userScrollTimeoutRef.current);
		userScrollTimeoutRef.current = setTimeout(
			() => setUserInteracted(false),
			2000
		);
	}, [loopedEvents.length]);

	// Auto-play
	useEffect(() => {
		if (userInteracted) return;
		const interval = setInterval(goToNext, 2000);
		return () => clearInterval(interval);
	}, [userInteracted, goToNext]);

	const prevIndex =
		(currentIndex - 1 + loopedEvents.length) % loopedEvents.length;
	const nextIndex = (currentIndex + 1) % loopedEvents.length;

	const displayedEvents = [
		loopedEvents[prevIndex],
		loopedEvents[currentIndex],
		loopedEvents[nextIndex],
	];
  return (
    <section id="activities">
    <div className="flex w-full flex-col items-center lg:py-10  lg:gap-10 max-sm:py-0  max-sm:gap-0 ">
     <div className="flex flex-col content-center items-center gap-2 max-sm:p-0  lg:px-14">
          <h2 className="fontheader  font-color lg:mb-7 sm:mb-0 max-sm:mb-0 text-right lg:text-6xl md:text-4xl sm:text-5xl   max-sm:text-2xl max-sm:font-bold">Latest Activities</h2>
       {/* <p className='text-black'>Fields Taht We tackle within our activities</p> */}
        </div>
   
      <div className=" relative flex lg:flex-row  md:flex-row w-full justify-center self-center overflow-hidden sm:flex-col sm:w-full max-sm:w-full ">
        {/* Left Arrow - visible on mobile/tablet */}

        <div className='max-md:hidden lg:block'>     <button
          onClick={goToPrevious}
          className="absolute top-1/2 left-2 z-20 -translate-y-1/2 cursor-pointer rounded-full bg-white/80 p-2 shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800"
          aria-label="Previous event"
        >
          <svg
            className="h-6 w-6 text-gray-700 dark:text-gray-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Right Arrow - visible on mobile/tablet */}
        <button
          onClick={goToNext}
          className="absolute top-1/3 right-2 z-20 -translate-y-1/2 transform cursor-pointer rounded-full bg-white/80 p-2 shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800"
          aria-label="Next event"
        >
          <svg
            className="h-6 w-6 text-gray-700 dark:text-gray-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        </div>
        <div
           className="relative flex max-sm:h-[20rem] sm:max-md:h-[20rem] md:max-lg:h-[28rem] lg:h-[30rem] w-full items-center justify-center overflow-hidden "
        >
          {displayedEvents.map((event, idx) => {
            const isActive = idx === 1;
						// Offset in % of container width
						const offsetX = (idx - 1) * 100; // prev: -100%, center: 0%, next: 100%
						const zIndex = isActive ? 10 : 1;
            return (
              <motion.div
                key={event['Event Title'] }
                drag="x"
								dragConstraints={{ left: 0, right: 0 }}
								onDragEnd={(e, info) => {
									if (info.offset.x < -50) goToNext();
									else if (info.offset.x > 50) goToPrevious();
								}}
								animate={{
									x: `${offsetX}%`,
									scale: isActive ? 1 : 0.8,
									opacity: isActive ? 1 : 0.5,
									zIndex: zIndex,
								}}
								transition={{ duration: 0.5, ease: "easeInOut" }}
                className=" cardact absolute flex w-[25rem] cursor-pointer lg:flex-col
                md:flex-col sm:flex-col justify-between rounded-2xl max-sm:flex-row  shadow-lg dark:bg-gray-800  lg:p-6 sm:p-4  max-sm:p-2 text-left  max-sm:w-full gap-2 sm:max-md:h-[90%] md:max-lg:h-full lg:h-[90%] max-sm:h-50  "
                	onClick={() => onExtend(event)}
              >
                
                <div className="relative lg:h-110 h-100 w-90 md:max-xl:w-90 sm:max-md:h-50  max-sm:h-45  md:max-lg:h-110 rounded rounded-lg">
											  
												  <a to="/">
													<Image
													  loading="lazy"
													 src={event['Event_image']}
													  className=" "
													  alt="event"
													  layout="fill"
													  objectFit="cover"
													/>
												  </a>
											   
											  </div>
				
                <div className="flex flex-col flex-3/5 text-white justify-center gap-2 lg:w-full">
                  <h3 className="fontBold text-lg max-sm:text-md">
                    {event['Event Title']}
                  </h3>
                 <p className=" max-sm:text-sm lg:line-clamp-2 md:line-clamp-2 sm:line-clamp-2 max-sm:line-clamp-6">
  {event['desrip']}
</p>

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .custom-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
          -webkit-overflow-scrolling: touch;
        }
      `}</style>
    </div>
    </section>
  );
};
