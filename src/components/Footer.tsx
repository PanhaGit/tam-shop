import { FaPhoneAlt } from "react-icons/fa";
import Logo from "../assets/logo.png";
import { IoMail } from "react-icons/io5";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gradient-to-r from-[#393939] to-[#222222] text-white">
      <div className="container m-auto md:w-9/12 py-8 flex flex-col md:flex-row items-center justify-between">
        <Link to={"/"}>
          <div className="w-48 md:w-56">
            <img src={Logo} alt="Logo" className="w-full" />
          </div>
        </Link>
        <div className="text-center md:text-left mt-4 md:mt-0">
          <h2 className="text-xl font-semibold font-font text-center">
            ទំនាក់ទន់យើង
          </h2>
          <div className="flex items-center justify-center md:justify-start mt-2">
            <FaPhoneAlt size={20} className="mr-2" />
            <p className="font-font">087 53 13 19</p>
            <span className="mx-2">|</span>
            <IoMail size={20} className="mr-2" />
            <a
              href="mailto:thopanha.123@gmail.com"
              className="hover:underline font-font"
            >
              thopanha.123@gmail.com
            </a>
          </div>
        </div>
      </div>
      <div className="w-11/12 text-center border-t border-[#757575] pt-5 m-auto p-1.5">
        <Link to={"/"}>
          <h3 className="font-font font-light md:text-lg text-sm">
            Copyright &copy; {currentYear} Tamshop. All rights reserved
          </h3>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
