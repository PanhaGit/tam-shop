import React, { useState } from "react";
import { AiFillProduct } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { Link } from "react-router-dom";

type NavbarProps = {
  id: number;
  page: string;
  icon: React.ReactNode;
  href: string;
};

const navbar: NavbarProps[] = [
  {
    id: 1,
    page: "ទំព័រដើម",
    icon: <SiHomeassistantcommunitystore />,
    href: "/",
  },
  {
    id: 2,
    page: "ទំនិញ",
    icon: <FiShoppingCart />,
    href: "/shop",
  },
  {
    id: 3,
    page: "ម៉ាកផលិតផល",
    icon: <AiFillProduct />,
    href: "/brand_product",
  },
  {
    id: 4,
    page: "ទំនាក់ទន់យើង",
    icon: <FaPhoneAlt />,
    href: "/contact_us",
  },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className="w-full border-b">
        <div className="md:w-11/12 m-auto md:flex md:items-center hidden">
          <ul className="md:flex md:items-center py-3 w-full">
            {navbar.map((page) => (
              <li key={page.id} className="md:mx-4">
                <Link
                  to={page.href}
                  className={`md:flex md:items-center font-khmer hover:text-blueHover transition ease-in-out delay-150 duration-150 ${
                    isMobileMenuOpen ? "hidden" : ""
                  }`}
                >
                  <span className="md:text-lg mr-2">{page.icon}</span>
                  <span className="md:text-lg">{page.page}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <span className="absolute right-0 top-[25px] md:hidden">
        <GiHamburgerMenu size={20} onClick={toggleMobileMenu} />
      </span>
      <ul
        className={`md:hidden absolute right-0 top-16 bg-slate-200 mr-2 z-20 ${
          isMobileMenuOpen ? "" : "hidden"
        }`}
      >
        {navbar.map((page: NavbarProps) => {
          return (
            <Link key={page.id} to={page.href} onClick={toggleMobileMenu}>
              <li className="mb-3 hover:bg-blueHover hover:text-white py-1 px-3 font-khmer  transition ease-in-out delay-150 duration-150">
                {page.page}
              </li>
            </Link>
          );
        })}
      </ul>
    </>
  );
};

export default Navbar;
