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
    <main className="padding-block bg-[url('/image/template/template-bg.png')] bg-cover">
      <section className="custom_width">
        <Header title={headerContent.title} content={headerContent.content} />
        <div className="grid grid-cols-12">
          {template.map((element, index) => {
            return (
              <div key={index}>
                <img src={element} alt="" />
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
