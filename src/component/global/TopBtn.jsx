import { useState } from "react";
import { Link } from "react-scroll";

function TopBtn() {
  const [btnAnimation, setBtnAnimation] = useState("");

  window.addEventListener("scroll", () => {
    window.scrollY > 100
      ? setBtnAnimation("bottom-20")
      : setBtnAnimation("bottom-[-40%]");
  });

  return (
    <div
      className={`fixed ${btnAnimation} cursor-pointer transition-all duration-1000 group right-0  rotate-[-90deg] flex items-center gap-2 z-[10] `}
    >
      <div className="w-[30px] h-0.5 bg-gray transitions group-hover:bg-primary"></div>
      <Link
        to="hero"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        className="text-xs rounded-full text-gray transitions font-poppin group-hover:text-primary"
      >
        SCROLL TOP
      </Link>
    </div>
  );
}

export default TopBtn;
