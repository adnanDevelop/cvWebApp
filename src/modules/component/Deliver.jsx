export default function Deliver() {
  const listItem = [
    "Proven CV Templates to increase Hiring Chance",
    "Creative and Clean Templates Design",
    "Easy and Intuitive Online CV Builder",
    "Free to use. Developed by hiring professionals.",
    "Fast Easy CV and Resume Formatting",
    "Recruiter Approved Phrases.",
  ];

  return (
    <main className=" custom_width padding-block">
      <section className="items-center grid-cols-12 gap-6 lg:grid">
        {/* Content Section */}
        <div className="col-span-6">
          <div className="deliver_content_section">
            {/* Dot section */}
            <div
              className="flex items-center gap-x-1.5"
              data-aos="fade-up"
              data-aos-duration="1500"
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
                data-aos-duration="1800"
              >
                We Deliver The Best
              </h2>
              <div>
                {listItem.map((element, index) => {
                  return (
                    <div
                      className="flex items-center mb-3.5 gap-x-3"
                      key={index}
                      data-aos="fade-up"
                      data-aos-duration="2200"
                    >
                      <img
                        src="/image/deliver/check-icon.png"
                        alt=""
                        loading="lazy"
                      />
                      <p className="sm:text-base text-sm font-medium leading-none  text-[#333] font-poppin">
                        {element}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        {/* Image Section */}
        <div className="col-span-6">
          <div
            className="items-center justify-center w-full lg:flex deliver_img"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <img src="/image/deliver/cv-img.png" loading="lazy" alt="" />
          </div>
        </div>
      </section>

      {/* Custom template card */}
      <section className="relative mt-10 overflow-hidden lg:px-[50px] px-[20px] py-[20px] bg-white rounded-2xl shadow-sm z-[1]">
        <img
          src="/image/deliver/custom-template.png"
          alt="custom template image"
          className="absolute top-0 left-0 z-[-1] lg:block hidden"
          loading="lazy"
        />
        <div className="flex md:flex-row flex-col items-center justify-between gap-x-4 xl:max-w-[750px] lg:max-w-[600px] ms-auto">
          <h2
            className="xl:text-[35px] md:text-[30px] text-[25px] md:my-8 my-4 font-poppin lg:text-start text-center font-semibold lg:leading-normal leading-tight text-blue"
            data-aos="zoom-in-out"
            data-aos-duration="1500"
          >
            Do you Need a Complete Custom CV Template?
          </h2>
          <button
            className=" btn-primary-lg-outline font-poppin"
            data-aos="zoom-in-out"
            data-aos-duration="1500"
          >
            Send a Request
          </button>
        </div>
      </section>
    </main>
  );
}
