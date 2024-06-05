export default function Pricing() {
  const cardContent = [
    {
      price: "$9.99",
      title: "Monthly Pack",
      content:
        "You will be billed per month, and get unlimited access to all resume Templates and new added ones",
    },
    {
      price: "$7.99",
      title: "Yearly Pack",
      content:
        "You will be billed per year, and get unlimited access to all resume Templates and new added ones",
      labelTitle: "save 20%",
    },
  ];

  return (
    <main
      className="grid grid-cols-12 gap-6 custom_width padding-block"
      id="pricing"
    >
      <section className="p-3 col-span-full md:col-span-6 lg:col-span-4">
        <div className="pricing_content">
          {/* Dot section */}
          <div
            className="flex items-center gap-x-1.5"
            data-aos="zoom-in-out"
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
              className="xl:text-[35px] md:text-[30px] text-[25px] md:my-8 my-4 font-poppin font-semibold leading-none text-blue"
              data-aos="zoom-in-out"
              data-aos-duration="1500"
            >
              Our Pricing
            </h2>
            <p
              className="text-base leading-7 text-justify font-poppin text-gray"
              data-aos="fade-right"
              data-aos-duration="1800"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
              dictum risus, non suscipit arcu. Quisque aliquam posuere tortor,
              sit amet convallis nunc scelerisque in.
            </p>

            <div
              className="flex flex-col items-center justify-center w-full py-4 mt-5 border text-primary border-primary"
              data-aos="zoom-in-out"
              data-aos-duration="2200"
            >
              <p className="font-semibold">Lets Build CV</p>
              <p className="capitalize ">With 7 days of free trial</p>
            </div>
            <div
              className="mt-5"
              data-aos="fade-right"
              data-aos-duration="2300"
            >
              <p className="text-lg leading-none text-primary font-poppin">
                Terms & condition
              </p>
              <p className="text-base text-gray font-poppin">
                subject to change with perior notice
              </p>
            </div>
          </div>
        </div>
      </section>
      {cardContent.map((element, index) => {
        return (
          <section
            className="relative bg-white rounded-lg shadow-sm col-span-full md:col-span-6 lg:col-span-4"
            key={index}
            data-aos="fade-up"
            data-aos-duration="2600"
          >
            <div
              loading="lazy"
              className="bg-[url('/image/price/price-img.png')] bg-no-repeat bg-right-top bg-[length:70%]  px-[40px] xl:pt-[45px] md:pt-[35px] pt-[25px] xl:pb-[60px] pb-[40px] text-right"
            >
              <h2 className="font-poppin xl:text-[40px] text-[30px] leading-none font-bold text-white">
                {element.price}
              </h2>
              <p className="text-green-400 ">/month</p>
            </div>
            <div className="p-4 mt-6 image_section">
              <h2 className="xl:text-[35px] md:text-[30px] text-[25px] mb-4 font-poppin font-semibold leading-none text-blue">
                {element.title}
              </h2>
              <p className="mb-6 text-base leading-7 text-justify font-poppin text-gray">
                {element.content}
              </p>
              <button className=" btn-primary-lg-outline font-poppin">
                Get Started
              </button>
            </div>
            <div className="content_section"></div>
          </section>
        );
      })}
    </main>
  );
}
