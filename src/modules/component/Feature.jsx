import Header from "../../component/global/Header";

export default function Feature() {
  const headerContent = {
    title: "Our Main Features",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.",
  };

  const featureCard = [
    {
      icon: "/image/feature/icon-1.png",
      title: "Proven CV Templates to increase Hiring Chance",
      content:
        "Lorem ipsum dolor sit amet, consecte adipiscing elit. Nulla neque quam, maxim us ut accumsan ut, posuere sit Lorem ipsum adipiscing elit.",
    },
    {
      icon: "/image/feature/icon-2.png",
      title: "Creative, Modern and Clean Templates Design",
      content:
        "Lorem ipsum dolor sit amet, consecte adipiscing elit. Nulla neque quam, maxim us ut accumsan ut, posuere sit Lorem ipsum adipiscing elit.",
    },
    {
      icon: "/image/feature/icon-3.png",
      title: "Easy and Intuitive Online CV and Resume Builder",
      content:
        "Lorem ipsum dolor sit amet, consecte adipiscing elit. Nulla neque quam, maxim us ut accumsan ut, posuere sit Lorem ipsum adipiscing elit.",
    },
    {
      icon: "/image/feature/icon-4.png",
      title: "Free to use. Developed by hiring professionals.",
      content:
        "Lorem ipsum dolor sit amet, consecte adipiscing elit. Nulla neque quam, maxim us ut accumsan ut, posuere sit Lorem ipsum adipiscing elit.",
    },
    {
      icon: "/image/feature/icon-5.png",
      title: "Recruiter Approved Phrases with Module Notification",
      content:
        "Lorem ipsum dolor sit amet, consecte adipiscing elit. Nulla neque quam, maxim us ut accumsan ut, posuere sit Lorem ipsum adipiscing elit.",
    },
    {
      icon: "/image/feature/icon-6.png",
      title: "Fast Easy CV and Resume Formatting",
      content:
        "Lorem ipsum dolor sit amet, consecte adipiscing elit. Nulla neque quam, maxim us ut accumsan ut, posuere sit Lorem ipsum adipiscing elit.",
    },
  ];

  return (
    <main className="custom_width padding-block">
      {/*Header Section  */}
      <section>
        <Header title={headerContent.title} content={headerContent.content} />
      </section>
      {/* Content Section */}
      <section className="grid grid-cols-12 gap-5">
        {featureCard.map((element, index) => (
          <div
            className="flex flex-col items-center justify-center gap-4 px-4 py-6 shadow-sm rounded-xl sm:col-span-6 lg:col-span-4 col-span-full"
            key={index}
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <img src={element.icon} alt="" loading="lazy" />
            <h4 className="text-lg font-bold leading-tight text-center text-blue font-poppin ">
              {element.title}
            </h4>
            <p className="text-sm text-center text-gray font-poppin">
              {element.content}
            </p>
          </div>
        ))}
      </section>
    </main>
  );
}
