import Header from "../../component/global/Header";

export default function Template() {
  const headerContent = {
    title: "Our Creative Templates",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  };

  const template = [
    "/image/template/template-one.png",
    "/image/template/template-two.png",
    "/image/template/template-three.png",
  ];

  return (
    <main
      className="padding-block bg-[url('/image/template/template-bg.png')] bg-cover"
      id="template"
    >
      <section className="custom_width">
        <Header title={headerContent.title} content={headerContent.content} />
        <div className="grid grid-cols-12 gap-4">
          {template.map((element, index) => {
            return (
              <div
                key={index}
                className="border-2 border-white shadow-sm lg:col-span-4 sm:col-span-6 col-span-full transitions hover:border-red-500"
                data-aos="zoom-in-out"
                data-aos-duration="1800"
              >
                <img src={element} alt="" loading="lazy" />
                <div className="flex items-center justify-center p-5 sm:mt-2">
                  <button className="font-semibold uppercase rounded-full btn-primary-lg">
                    see templates
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
