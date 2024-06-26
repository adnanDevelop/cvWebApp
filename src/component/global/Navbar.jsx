import { useState } from "react";
import { GrClose } from "react-icons/gr";
import { Link } from "react-scroll";

function Navbar() {
  const [navbarActive, setNavbarActive] = useState("");
  const [open, setOpen] = useState(false);

  window.addEventListener("scroll", () => {
    window.scrollY > 20
      ? setNavbarActive("bg-[#ccd7e8] ")
      : setNavbarActive("");
  });

  const openSideBar = () => {
    setOpen(!open);
  };

  return (
    <header
      className={`${navbarActive}  transitions fixed top-0 left-[50%] translate-x-[-50%] w-full z-[10] shadow`}
    >
      {/* Large Screen links   */}
      <nav className={`flex items-center justify-between custom_width py-3`}>
        {/* Logo section */}
        <div
          className="flex items-center"
          data-aos="fade-zoom-in"
          data-aos-duration="2500"
        >
          <img src="/image/logo.png" alt="" loading="lazy" />
          <Link
            className="cursor-pointer"
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <p className="text-[22px] font-semibold leading-none font-poppin text-[#333]">
              CV Builder
            </p>
          </Link>
        </div>
        {/* Link section */}
        <div className="hidden lg:block">
          <ul
            className="flex items-center list-none gap-x-6"
            data-aos="fade-zoom-in"
            data-aos-duration="2500"
          >
            <li>
              <Link
                to="hero"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                className={`font-medium text-[#333] uppercase transitions hover:text-primary focus:text-primary   font-poppin cursor-pointer `}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                className={`font-medium text-[#333] uppercase transitions hover:text-primary focus:text-primary   font-poppin cursor-pointer `}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="pricing"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                className={`font-medium text-[#333] uppercase transitions hover:text-primary focus:text-primary   font-poppin cursor-pointer `}
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to="template"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                className={`font-medium text-[#333] uppercase transitions hover:text-primary focus:text-primary   font-poppin cursor-pointer `}
              >
                Template
              </Link>
            </li>
            <li>
              <Link
                to="testmonial"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                className={`font-medium text-[#333] uppercase transitions hover:text-primary focus:text-primary   font-poppin cursor-pointer `}
              >
                contact
              </Link>
            </li>
          </ul>
        </div>
        {/* Button section */}
        <div className="hidden lg:block">
          <div className="flex gap-x-2">
            <button
              className="uppercase btn-primary-sm"
              data-aos="fade-zoom-in"
              data-aos-duration="3000"
            >
              Log in
            </button>
            <button
              className="uppercase btn-primary-sm"
              data-aos="fade-zoom-in"
              data-aos-duration="3500"
            >
              sign Up
            </button>
          </div>
        </div>

        {/* Hamburger menu */}
        <div className="lg:hidden">
          <button
            type="button"
            className="hamburger flex flex-col md:gap-y-[7px] gap-y-[6px]"
            onClick={openSideBar}
          >
            <span
              className={`md:w-[30px] w-[25px] md:h-[2.4px] h-[2.2px] bg-[#43525B] rounded-full transform transition duration-500 ease-in-out ${
                open
                  ? "rotate-45 md:translate-y-[0.6rem] translate-y-[0.6rem]"
                  : ""
              }`}
            ></span>
            <span
              className={`md:w-[30px] w-[25px] md:h-[2.4px] h-[2.4px] bg-[#43525B] rounded-full transform transition duration-500 ease-in-out ${
                open ? " opacity-0" : ""
              }`}
            ></span>
            <span
              className={`md:w-[30px] w-[25px] md:h-[2.4px] h-[2.2px] bg-[#43525B] rounded-full transform transition duration-500 ease-in-out ${
                open
                  ? " -rotate-45 md:translate-y-[-.6rem] translate-y-[-.45rem]"
                  : ""
              }`}
            ></span>
          </button>
        </div>

        {/* Small screen sidebar */}
      </nav>

      <div
        className={` ${
          open ? "left-0" : "left-[-100%]"
        } w-[280px] h-screen !duration-500  fixed top-0 left-0 p-3  bg-[#16214c] z-[1] lg:hidden block transitions`}
      >
        <div className="absolute top-0 left-0 flex items-center justify-between w-full p-3 mb-10">
          <div className="flex items-center">
            <img
              src="/image/logo.png"
              className="w-[40px]"
              alt=""
              loading="lazy"
            />
            <p className="text-base font-semibold leading-none text-white font-poppin">
              CV Builder
            </p>
          </div>
          <button
            className="close_btn text-[16px] text-white p-2 border-2  border-white rounded-md transition duration-300 hover:border-sky-500 hover:text-sky-500 "
            onClick={() => {
              setOpen(false);
            }}
          >
            <GrClose />
          </button>
        </div>

        <ul className="flex flex-col justify-center h-full gap-y-2">
          <li>
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className={`font-medium text-light-white  uppercase transitions hover:text-primary focus:text-primary  font-poppin border-b-2 border-b-light-white focus:border-b-primary py-4 w-full block `}
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className={`font-medium text-light-white  uppercase transitions hover:text-primary focus:text-primary  font-poppin border-b-2 border-b-light-white focus:border-b-primary py-4 w-full block `}
              onClick={() => setOpen(false)}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="pricing"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className={`font-medium text-light-white  uppercase transitions hover:text-primary focus:text-primary  font-poppin border-b-2 border-b-light-white focus:border-b-primary py-4 w-full block `}
              onClick={() => setOpen(false)}
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              to="template"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className={`font-medium text-light-white  uppercase transitions hover:text-primary focus:text-primary  font-poppin border-b-2 border-b-light-white focus:border-b-primary py-4 w-full block `}
              onClick={() => setOpen(false)}
            >
              Template
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className={`font-medium text-light-white  uppercase transitions hover:text-primary focus:text-primary  font-poppin border-b-2 border-b-light-white hover:border-b-primary focus:border-b-primary py-4 w-full block `}
              onClick={() => setOpen(false)}
            >
              contact
            </Link>
          </li>
        </ul>

        <div className="absolute left-0 flex items-center justify-center w-full mt-10 bottom-4 gap-x-2">
          <button className="uppercase btn-primary-sm">Log in</button>
          <button className="uppercase btn-primary-sm">sign Up</button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
