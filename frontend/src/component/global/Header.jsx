// eslint-disable-next-line react/prop-types
function Header({ title, content }) {
  return (
    <section className="flex flex-col items-center justify-center gap-3 custom_width mb-[60px]">
      {/* Dot section */}
      <div className="flex items-center gap-x-1.5">
        <span className="w-[8px] h-[8px] rounded-full bg-primary"></span>
        <span className="w-[8px] h-[8px] rounded-full bg-[#9c88ff]"></span>
        <span className="w-[8px] h-[8px] rounded-full bg-[#fbc531]"></span>
        <span className="w-[8px] h-[8px] rounded-full bg-[#4cd137]"></span>
        <span className="w-[8px] h-[8px] rounded-full bg-[#487eb0]"></span>
        <span className="w-[8px] h-[8px] rounded-full bg-[#e84118]"></span>
        <span className="w-[8px] h-[8px] rounded-full bg-[#8c7ae6]"></span>
      </div>
      <div className="text-center max-w-[700px]">
        <h2 className="xl:text-[35px] text-[30px] my-4 font-poppin font-semibold leading-none text-blue">
          {title}
        </h2>
        <p className="text-base leading-7 font-poppin text-gray">{content}</p>
      </div>
    </section>
  );
}

export default Header;
