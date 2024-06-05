import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  const links = {
    privacyLink: [
      "Advertiser Agreement",
      "Acceptable Use Policy",
      "Privacy Policy",
      "Technology Privacy",
      "Developer Agreement",
    ],
    navigate: ["Advertisers", "Developers", "Resources", "Company", "Connect"],
    detail: [
      "Mailing Address:xx00 E. Union Ave",
      "Suite 110. Denver, CO 80237",
      "+999 90 932 627",
      "support@yourdomain.com",
    ],
  };

  return (
    <footer className="py-[60px] bg-[url('/image/footer-bg.png')] bg-no-repeat bg-cover mt-[80px]  bg-center md:bg-left">
      <div className="grid grid-cols-12 gap-4 custom_width">
        {/* Detail Section */}
        <div className="col-span-full md:col-span-6 lg:col-span-4 md:pe-4">
          <div>
            <div className="flex items-center gap-x-1.5">
              <img
                src="/image/logo.png"
                className="w-[50px] h-auto object-cover"
                alt=""
              />
              <p className="text-[20px] font-medium leading-none text-white font-poppin">
                CV Builder
              </p>
            </div>
            <p className="mt-5 text-sm text-justify text-white font-poppin">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
              ducimus voluptatibus neque illo id repellat quisquam? Autem
              expedita earum quae laborum ipsum ad.
            </p>
            <div className="flex items-center mt-5 gap-x-3">
              <span className="text-lg text-white scale-100 cursor-pointer transitions hover:text-primary">
                <FaFacebookF />
              </span>
              <span className="text-lg text-white scale-100 cursor-pointer transitions hover:text-primary">
                <FaTwitter />
              </span>
              <span className="text-lg text-white scale-100 cursor-pointer transitions hover:text-primary">
                <FaInstagram />
              </span>
              <span className="text-lg text-white scale-100 cursor-pointer transitions hover:text-primary">
                <FaLinkedinIn />
              </span>
            </div>
          </div>
        </div>
        <div className="mt-4 col-span-full md:col-span-6 lg:col-span-5 md:mt-0">
          <div className="w-full grid-cols-12 sm:grid link_section">
            <div className="col-span-6">
              <h3 className="mb-4 text-lg font-medium text-white uppercase font-poppin">
                privacy & tos
              </h3>
              <ul className="list-none">
                {links.privacyLink.map((element, index) => {
                  return (
                    <li
                      key={index}
                      className="mb-2 text-sm cursor-pointer text-light-white font-poppin transitions hover:text-primary"
                    >
                      {element}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="flex-col items-center justify-center col-span-6 mt-4 md:flex sm:mt-0 ">
              <h3 className="mb-4 text-lg font-medium text-white uppercase font-poppin">
                Navigate
              </h3>
              <ul className="list-none">
                {links.navigate.map((element, index) => {
                  return (
                    <li
                      key={index}
                      className="mb-2 text-sm cursor-pointer text-light-white font-poppin transitions hover:text-primary"
                    >
                      {element}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-4 col-span-full sm:col-span-6 lg:col-span-3 md:mt-0">
          <h3 className="mb-4 text-lg font-medium text-white uppercase font-poppin">
            contact us
          </h3>
          <ul className="list-none ">
            {links.detail.map((element, index) => {
              return (
                <li
                  key={index}
                  className="mb-2 text-sm cursor-pointer text-light-white font-poppin transitions hover:text-primary"
                >
                  {element}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
}
