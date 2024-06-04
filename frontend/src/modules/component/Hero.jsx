export default function Hero() {
  return (
    <main
      className="w-full lg:grid grid-cols-12 gap-4 md:mt-[200px] lg:mb-[50px] mt-[120px] custom_width  items-center"
      id="home"
    >
      {/* Content section */}
      <section className="col-span-6 mb-4 xl:pe-5 lg:mb-0">
        <div className="flex items-center gap-1 py-2 px-2.5 rounded-full max-w-[400px] bg-light-blue">
          <img src="/image/dollar-icon.svg" alt="" />
          <p className="text-sm font-medium leading-none font-poppin lg:text-base text-primary">
            Discover The Easiest ways to Build Your CV!
          </p>
        </div>
        <h1 className="xl:text-[45px] md:text-[40px] text-[30px] md:my-8 my-5 font-semibold font-poppin  leading-none text-blue">
          Online CV Builder With Creative Templates.
        </h1>
        <p className="text-base leading-7 text-justify lg:text-lg text-gray font-poppin">
          Our Perfect resume builder takes the hassle out of resume writing.
          Choose from several templates and follow easy prompts to create the
          perfect job-ready resume.
        </p>

        <div className="flex mt-5 md:mt-8 gap-x-3">
          <button className="uppercase btn-primary-lg">choose template</button>
          <button className="uppercase btn-primary-lg">Contact us</button>
        </div>
      </section>
      {/* Image section */}
      <section className="col-span-6 ">
        <img src="/image/hero-img.png" alt="" />
      </section>
    </main>
  );
}
