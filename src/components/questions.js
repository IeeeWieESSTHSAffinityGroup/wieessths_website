'use client';

import './values.css';
import { question } from '../data/question';
import { useState } from 'react';

export default function Questions() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section id="faq" className="flex w-full flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <div className="flex w-full justify-center">
          <h2 className="content mb-10">FAQ</h2>
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:px-2 lg:px-6">
          {question.map((value, index) => (
            <div
              key={index}
              className="relative flex cursor-pointer flex-col items-center justify-between gap-4 rounded-2xl bg-white text-black max-md:p-8 max-sm:p-2 sm:p-2 md:p-8 lg:p-14"
              onClick={() => toggleAnswer(index)}
            >
              <div className="text-center font-bold text-wrap max-sm:text-xl sm:text-sm lg:text-3xl">
                {value.q}
              </div>

              {openIndex === index && (
                <div className="leading-9 max-sm:text-xl sm:text-sm lg:text-2xl">{value.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
