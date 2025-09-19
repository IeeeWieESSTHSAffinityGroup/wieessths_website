export default function WieTunisia() {
  return (
    <section className="align-center grid items-center py-14 max-sm:grid-cols-8 max-sm:px-0 sm:px-0 md:grid-cols-8 lg:grid-cols-16 lg:px-12">
      <div className="flex h-full w-full content-center items-center justify-center max-sm:order-2 max-sm:col-span-8 sm:order-2 sm:col-span-8 lg:order-1 lg:col-span-6">
        <img className="items-center justify-center" src="AESS.png" alt="TSYP 11" loading="lazy" />
      </div>
      <div className="col-span-1"></div>
      <div className="col-span-8 flex flex-col gap-4 py-2 max-sm:order-1 max-sm:col-span-8 sm:order-1 lg:order-2">
        <h1 className="fontheader  font-color text-5xl max-sm:text-center md:text-center lg:text-right lg:text-6xl">
          IEEE ESSTHS Student Branch
        </h1>
        <div className="text-xl leading-10 max-sm:text-center md:text-right lg:text-right text-black">
        IEEE ESSTHS Student Branch, founded in 2020, is home to more than
							280 members, making it the largest Student Branch in Sousse, and
							7th in Tunisia Section. It encompasses 5 Technical Chapters: AESS,
							CS, IAS, PES, RAS, IES, and 2 Affinity Groups: SIGHT & WIE. We
							have had the honor of receiving more than 12 worldwide IEEE Awards
							across all fields through the dedication and commitment of each of
							our members.
        </div>
      </div>
    </section>
  );
}
