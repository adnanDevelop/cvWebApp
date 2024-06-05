import Header from "../../component/global/Header";
// Icons
import { FaQuoteRight } from "react-icons/fa";

// Swiper js
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

export default function Testmonial() {
  const headerContent = {
    title: "Your Success, Our Inspiration",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.",
  };

  const testmonial = [
    {
      icon: "/image/testmonial/img-1.jpg",
      title: "Jebin Khan",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.",
      subTitle: "One of our clients",
    },
    {
      icon: "/image/testmonial/img-2.jpg",
      title: "Sunny Khan",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.",
      subTitle: "One of our clients",
    },
    {
      icon: "/image/testmonial/img-3.jpg",
      title: "Ajay Das",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.",
      subTitle: "One of our clients",
    },
    {
      icon: "/image/testmonial/img-1.jpg",
      title: "Jebin Khan",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.",
      subTitle: "One of our clients",
    },
    {
      icon: "/image/testmonial/img-2.jpg",
      title: "Sunny Khan",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.",
      subTitle: "One of our clients",
    },
    {
      icon: "/image/testmonial/img-3.jpg",
      title: "Ajay Das",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.",
      subTitle: "One of our clients",
    },
  ];

  return (
    <main className="custom_width" id="testmonial">
      {/* Header Section */}
      <section>
        <Header title={headerContent.title} content={headerContent.content} />
      </section>
      {/* Content Section */}
      <section>
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          loop={true}
          grabCursor={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            572: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {testmonial.map((element, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="relative flex flex-col items-center justify-center px-4 py-8 overflow-hidden text-center bg-white border rounded-lg border-light-white">
                  <div className="absolute top-[-50px] left-[-30px] w-[80px] h-[150px] bg-primary rotate-[35deg]"></div>
                  <span className="text-white text-[30px] absolute top-4 left-2 ">
                    <FaQuoteRight />
                  </span>
                  <img
                    src={element.icon}
                    className="w-[80px] rounded-full "
                    alt=""
                    loading="lazy"
                  />
                  <p className="my-5 text-sm text-gray font-poppin">
                    {element.content}
                  </p>
                  <h3 className="text-lg font-bold font-poppin text-blue">
                    {element.title}
                  </h3>
                  <p className="text-sm text-gray font-poppin">
                    {element.subTitle}
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </main>
  );
}
