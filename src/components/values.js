import './values.css';

export default function Values() {
  return (
    <section id="value">
      <div className="flex flex-col p-0  content-center items-center gap-10 lg:max-xl:px-0 sm:max-md:px-6  md:max-lg:px-8      lg:px-14">
        <div className="flex flex-col content-center items-center gap-2 max-sm:p-0 sm:p-0 lg:px-14 max-lg:px-10 md:px-10 ">
          <h2 className="fontheader  font-color  text-right lg:text-6xl md:text-4xl sm:text-5xl   max-sm:text-2xl font-bold">Domains</h2>
          {/* <p className='text-black'>Fields Taht We tackle within our activities</p> */}
        </div>

        <div className=" mx-auto grid max-w-6xl max-sm:max-w-full max-sm:grid-cols-1 max-sm:gap-6 sm:max-w-full sm:grid-cols-1 sm:gap-6 lg:grid-cols-3 lg:gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className={`card p-4 items-left relative flex flex-col justify-between rounded-2xl xl:gap-8 max-sm:gap-2  max-lg:gap-4 md:gap-4 sm:gap-4  
               max-sm:p-4  
             lg:max-xl:p-10 sm:max-md:p-6  md:max-lg:p-8  xl:p-16 `}
            >
              <div className="font-bold text-wrap sm:text-2xl lg:text-4xl  lg:max-xl:text-2xl sm:max-md:text-xl  md:max-lg:text-2xl   ">{value.title}</div>
              <div className="sm:text-md text-md max-sm:text-sm
              sm:text-2xl lg:text-xl  lg:max-xl:text-xl sm:max-md:text-sm  md:max-lg:text-md">{value.content}</div>
            </div>
          ))}
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
