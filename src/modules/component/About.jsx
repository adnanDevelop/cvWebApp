export default function About() {
  const aboutCard = [
    {
      icon: "/image/about/icon-1.png",
      title: "Easy Online Resume Builder",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium modi assumenda.",
    },
    {
      icon: "/image/about/icon-2.png",
      title: "Step By Step Expert Tips",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium modi assumenda.",
    },
    {
      icon: "/image/about/icon-3.png",
      title: "Recruiter Approved Phrases",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium modi assumenda.",
    },
  ];

  return (
    <div className="relative w-full overflow-hidden padding-block" id="about">
      <img
        src="/image/about/about-bg.svg"
        className="absolute top-0 left-0 z-[-1]"
        alt=""
      />
      <section className="grid-cols-12 gap-6 custom_width lg:grid ">
        {/* About Card Section */}
        <section className="col-span-6 mb-10 lg:mb-0">
          <div>
            {aboutCard.map((element, index) => {
              return (
                <div
                  className="flex items-center w-full px-4 mb-4 bg-white rounded-sm shadow-md sm:px-6 py-7 gap-x-3"
                  key={index}
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <img src={element.icon} loading="lazy" alt="" />
                  <div>
                    <h4 className="mb-1 text-base font-semibold sm:text-lg text-blue font-poppin">
                      {element.title}
                    </h4>
                    <p className="text-sm leading-5 text-justify text-gray font-poppin">
                      {element.content}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* About content */}
        <section className="col-span-6 lg:ps-[20px]">
          {/* Dot section */}
          <div
            className="flex items-center gap-x-1.5"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <span className="w-[8px] h-[8px] rounded-full bg-primary"></span>
            <span className="w-[8px] h-[8px] rounded-full bg-[#9c88ff]"></span>
            <span className="w-[8px] h-[8px] rounded-full bg-[#fbc531]"></span>
            <span className="w-[8px] h-[8px] rounded-full bg-[#4cd137]"></span>
            <span className="w-[8px] h-[8px] rounded-full bg-[#487eb0]"></span>
            <span className="w-[8px] h-[8px] rounded-full bg-[#e84118]"></span>
            <span className="w-[8px] h-[8px] rounded-full bg-[#8c7ae6]"></span>
          </div>

          <div className="mt-4">
            <h2
              className="xl:text-[35px] text-[30px] md:my-8 my-4 font-poppin font-semibold leading-none text-blue"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              Why Choose Our Platform?
            </h2>
            <p
              className="text-base leading-7 text-justify font-poppin text-gray"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
              dictum risus, non suscipit arcu. Quisque aliquam posuere tortor,
              sit amet convallis nunc scelerisque in.
            </p>
            <p
              className="mt-3 text-base leading-7 text-justify font-poppin text-gray"
              data-aos="fade-up"
              data-aos-duration="2500"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
              eius molestiae facere, natus reprehenderit eaque eum, autem ipsam.
              Magni, error. Tempora odit laborum iure inventore possimus
              laboriosam qui nam. Fugit!
            </p>

            <button
              className="mt-4 uppercase btn-primary-lg"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              lets build you cv
            </button>
          </div>
        </section>
      </section>
    </div>
  );
}
