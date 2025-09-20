'use client';
import React, { useEffect, Suspense, useRef, useState, useCallback } from 'react';
import './values.css';

export default function UpEvents({ chapter }) {
  if (chapter.length === 0) return null;

  if (chapter.length === 0) return null;

  const sortedEvents = [...chapter]
    .filter((event) => event['Event Date'])
    .map((event) => ({
      ...event,
      parsedDate: new Date(event['Event Date']),
    }))
    .sort((a, b) => b.parsedDate - a.parsedDate);

  const loopedEvents = [
    sortedEvents[sortedEvents.length - 1],
    ...sortedEvents,
    sortedEvents[0],
    sortedEvents[1],
  ];

  return (
    <section>
      <Actvities loopedEvents={loopedEvents} />
    </section>
  );
}

const Actvities = ({ loopedEvents }) => {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInteracted, setUserInteracted] = useState(false);
  const userScrollTimeoutRef = useRef(null);

  // Touch handling state
  const touchStartRef = useRef({ x: 0, y: 0 });
  const touchThreshold = 50; // Minimum swipe distance

  const lastScrollTimeRef = useRef(0);

  const handleUserScroll = useCallback(
    (e) => {
      const now = Date.now();
      if (now - lastScrollTimeRef.current < 1000) return; // 1s debounce
      lastScrollTimeRef.current = now;

      if (!userInteracted) setUserInteracted(true);
      if (userScrollTimeoutRef.current) clearTimeout(userScrollTimeoutRef.current);

      const deltaY = e.deltaY;

      if (deltaY > 0) {
        setCurrentIndex((prev) => (prev + 1) % loopedEvents.length);
      } else if (deltaY < 0) {
        setCurrentIndex((prev) => (prev - 1 + loopedEvents.length) % loopedEvents.length);
      }

      userScrollTimeoutRef.current = setTimeout(() => {
        setUserInteracted(false);
      }, 1000);
    },
    [userInteracted, loopedEvents.length],
  );

  // Touch event handlers
  const handleTouchStart = useCallback((e) => {
    const touch = e.touches[0];
    touchStartRef.current = { x: touch.clientX, y: touch.clientY };
  }, []);

  const handleTouchEnd = useCallback(
    (e) => {
      const touch = e.changedTouches[0];
      const deltaX = touch.clientX - touchStartRef.current.x;
      const deltaY = touch.clientY - touchStartRef.current.y;

      // Determine if it's a horizontal swipe (more horizontal than vertical movement)
      if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > touchThreshold) {
        e.preventDefault();

        if (!userInteracted) setUserInteracted(true);

        // Clear existing timeouts
        if (userScrollTimeoutRef.current) clearTimeout(userScrollTimeoutRef.current);

        if (deltaX > 0) {
          // Swiping right - go to previous element
          setCurrentIndex((prev) => (prev - 1 + loopedEvents.length) % loopedEvents.length);
        } else {
          // Swiping left - go to next element
          setCurrentIndex((prev) => (prev + 1) % loopedEvents.length);
        }

        // Resume auto-scroll after 3 seconds of no interaction
        userScrollTimeoutRef.current = setTimeout(() => {
          setUserInteracted(false);
        }, 3000);
      }
    },
    [userInteracted, loopedEvents.length, touchThreshold],
  );

  // Auto-scroll effect
  // useEffect(() => {
  //   if (userInteracted) return;

  //   const interval = setInterval(() => {
  //     setCurrentIndex((prev) => (prev + 1) % loopedEvents.length);
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, [userInteracted, loopedEvents.length]);

  // // Add wheel event listeners (desktop only)
  // useEffect(() => {
  //   const container = scrollRef.current;
  //   if (!container) return;

  //   //   // Mouse wheel events for desktop
  //   container.addEventListener('wheel', handleUserScroll, { passive: true });

  //   return () => {
  //     container.removeEventListener('wheel', handleUserScroll);
  //   };
  // }, [handleUserScroll]);

  // useEffect(() => {
  //   if (!scrollRef.current) return;
  //   const container = scrollRef.current;

  //   //   // For 2 or fewer elements, don't center
  //   if (loopedEvents.length <= 2) return;

  //   const selectedElement = container.children[1]; // Middle element
  //   if (!selectedElement) return;

  //   const containerCenter = container.offsetWidth / 2;
  //   const elementCenter = selectedElement.offsetLeft + selectedElement.offsetWidth / 2;

  //   container.scrollTo({
  //     left: elementCenter - containerCenter,
  //     behavior: 'smooth',
  //   });
  // }, [currentIndex, loopedEvents.length]);

  // Get prev, current, next indexes cyclically
  const prevIndex = (currentIndex - 1 + loopedEvents.length) % loopedEvents.length;
  const nextIndex = (currentIndex + 1) % loopedEvents.length;

  const displayedEvents = [
    loopedEvents[prevIndex],
    loopedEvents[currentIndex],
    loopedEvents[nextIndex],
  ];

  // Navigation functions for arrows
  const goToPrevious = () => {
    if (!userInteracted) setUserInteracted(true);
    if (userScrollTimeoutRef.current) clearTimeout(userScrollTimeoutRef.current);

    setCurrentIndex((prev) => (prev - 1 + loopedEvents.length) % loopedEvents.length);

    userScrollTimeoutRef.current = setTimeout(() => {
      setUserInteracted(false);
    }, 3000);
  };

  const goToNext = () => {
    if (!userInteracted) setUserInteracted(true);
    if (userScrollTimeoutRef.current) clearTimeout(userScrollTimeoutRef.current);

    setCurrentIndex((prev) => (prev + 1) % loopedEvents.length);

    userScrollTimeoutRef.current = setTimeout(() => {
      setUserInteracted(false);
    }, 3000);
  };

  return (
    <section id="activities">
    <div className="flex w-full flex-col items-center lg:py-10  lg:gap-10 max-sm:p-0  max-sm:gap-5 ">
     <div className="flex flex-col content-center items-center gap-2 max-sm:p-0  lg:px-14">
          <h2 className="fontheader  font-color lg:mb-7 sm:mb-0 max-sm:mb-0 text-right lg:text-6xl md:text-4xl sm:text-5xl   max-sm:text-2xl max-sm:font-bold">Latest Activities</h2>
       <p className='text-black'>Fields Taht We tackle within our activities</p>
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
          className="absolute top-1/2 right-2 z-20 -translate-y-1/2 transform cursor-pointer rounded-full bg-white/80 p-2 shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800"
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
          ref={scrollRef}
          className="custom-scrollbar flex lg:flex-row max-lg:flex-row  md:flex-col  max-md:flex-col sm:flex-col max-sm:flex-col w-full justify-center space-x-3 self-center overflow-hidden scroll-smooth lg:p-3 max-sm:p-2 sm:gap-4 max-sm:gap-5 "
          style={{
            scrollbarWidth: 'none',
            display: 'flex',
            justifyContent: 'center',
           
            // Allow vertical scrolling but handle horizontal ourselves
          }}
        >
          {displayedEvents.map((event, idx) => {
            return (
              <div
                key={event['Event Title'] + idx}
                className="cardact box flex   md:flex-col max-md:flex-col max-sm:flex-row  sm:flex-row justify-between rounded-xl lg:p-6 sm:p-4  max-sm:p-2 text-left shadow-lg sm:w-full max-sm:w-full gap-2 max-sm:h-40  "
              >
                <div className="lg:w-full flex flex-3/5  justify-center items-center">
                  <img
                    src={event['Event_image']}
                    alt=""
                    className="shadow-black-600 h-auto w-full rounded-xl shadow-lg"
                  />
                </div>
                <div className="flex flex-col flex-3/5  justify-center gap-2 lg:w-full">
                  <h3 className="fontBold text-lg text-gray-900 dark:text-white max-sm:text-xs">
                    {event['Event Title']}
                  </h3>
                 <p className="text-gray-600 dark:text-gray-300 max-sm:text-xs line-clamp-2 max-sm:line-clamp-1">
  {event['desrip']}
</p>

                </div>
              </div>
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
