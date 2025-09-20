import './values.css';

export default function Values() {
  return (
    <section id="value">
      <div className="flex flex-col content-center items-center gap-10 max-sm:p-0 sm:p-0 lg:px-14">
        <div className="flex flex-col content-center items-center gap-2 max-sm:p-0 sm:p-0 lg:px-14">
          <h2 className="fontheader  font-color lg:mb-7 text-right lg:text-6xl md:text-4xl sm:text-5xl   max-sm:text-2xl max-sm:font-bold">Domains</h2>
          <p className='text-black'>Fields Taht We tackle within our activities</p>
        </div>

        <div className="mx-auto grid max-w-6xl max-sm:max-w-full max-sm:grid-cols-1 max-sm:gap-6 sm:max-w-full sm:grid-cols-1 sm:gap-6 lg:grid-cols-3 lg:gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className={`card items-left relative flex flex-col justify-between rounded-2xl max-sm:gap-2 max-sm:p-4 sm:gap-4 sm:p-4 lg:gap-8 lg:p-16`}
            >
              <div className="font-bold text-wrap sm:text-2xl lg:text-4xl">{value.title}</div>
              <div className="sm:text-md text-2xl max-sm:text-sm">{value.content}</div>
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
