import React, { useState, useEffect } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import Logo from "../assets/logo.png";
import { FaTimes } from "react-icons/fa";
import { MdShoppingCartCheckout } from "react-icons/md";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { FaPhoneAlt } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import {
  TabletStandHolder,
  smartWatch,
  phoneComputer,
  KarlSiliconeCase,
  Electronics,
  ProductDiscountType,
} from "../Data/Pro_discount";

const allProducts: ProductDiscountType[] = [
  ...TabletStandHolder,
  ...smartWatch,
  ...phoneComputer,
  ...KarlSiliconeCase,
  ...Electronics,
];

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
    id: 4,
    page: "ទំនាក់ទន់យើង",
    icon: <FaPhoneAlt />,
    href: "/contact_us",
  },
];

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const [showSearch, setShowSearch] = useState(false);
  const { cart } = useCart();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<ProductDiscountType[]>([]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (href: string) => {
    setActiveLink(href);
    setIsMobileMenuOpen(false);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    if (searchQuery) {
      const results = allProducts.filter((product) =>
        product.model.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  return (
    <>
      <div className="bg-white md:border-b md:pb-1">
        <div className="bg-white bg m-auto w-[95%] md:w-11/12 py-2 md:h-full flex justify-between items-center">
          <div className="w-1/2 md:w-[30%] lg:w-[15%] flex justify-center items-center">
            <Link to={"/"}>
              <img
                src={Logo}
                alt="Logo"
                className="w-full h-full object-contain"
              />
            </Link>
          </div>
          <div className="hidden md:flex md:w-[60%] lg:w-[50%] h-full md:border-2 border rounded-tl-2xl rounded-br-2xl relative">
            <form className="flex items-center justify-center w-full h-full">
              <div className="md:w-[30%] flex items-center justify-between py-2.5 pr-3">
                <h1 className="text-sm md:text-base px-2 font-font">ទាំងអស់</h1>
                <RiArrowDropDownLine className="text-xl md:text-2xl" />
              </div>
              <div className="w-full">
                <input
                  type="search"
                  placeholder="ស្វែងរកផលិតផល..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="w-full border py-2.5 px-6 font-font outline-none rounded-br-2xl"
                />
              </div>
            </form>
            {searchQuery && (
              <div className="absolute top-full mt-2 bg-white w-full border rounded-b-2xl z-10">
                {searchResults.length > 0 ? (
                  <ul className="max-h-60 overflow-y-auto">
                    {searchResults.map((product) => (
                      <li key={product.id} className="p-2 hover:bg-gray-100">
                        <Link
                          to={`/detail/${product.id}`}
                          state={{ product: product }}
                          className="flex items-center space-x-2"
                        >
                          <img
                            src={product.image}
                            alt={product.model}
                            className="w-12 h-12 object-cover"
                          />
                          <div>
                            <p className="text-sm font-font">{product.model}</p>
                            <p className="text-xs text-gray-500">
                              {product.price} $
                            </p>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="p-2 text-center text-sm text-gray-500">
                    គ្មានលទ្ធផល!
                  </p>
                )}
              </div>
            )}
          </div>
          <div className="lg:flex md:mr-0 h-full items-center">
            <Link to={"/add_to_cart"} className="flex items-center">
              <MdShoppingCartCheckout size={30} />
              <div>
                <span className="bg-red-400 text-white h-5 w-5 flex items-center justify-center rounded-full">
                  {cart.length}
                </span>
                <p>Cart</p>
              </div>
            </Link>
          </div>
          <div className="flex md:hidden space-x-6 items-center">
            {showSearch ? (
              <FaTimes
                size={25}
                className="cursor-pointer"
                onClick={() => setShowSearch(false)}
              />
            ) : (
              <IoSearch
                size={25}
                className="cursor-pointer"
                onClick={() => setShowSearch(true)}
              />
            )}
            <span className="md:hidden block">
              <GiHamburgerMenu size={20} onClick={toggleMobileMenu} />
            </span>
          </div>
        </div>
        {showSearch && (
          <div className="w-11/12 md:hidden bg-white z-20 border m-auto rounded-br-2xl rounded-tl-2xl absolute top-20 left-4">
            <form className="flex items-center justify-center w-full h-full">
              <div className="w-1/4 flex items-center mr-1 justify-between py-2.5 pr-3 rounded-tl-2xl">
                <h1 className="text-sm font-font">ទាំងអស់</h1>
                <RiArrowDropDownLine className="text-xl" />
              </div>
              <div className="w-[68%]">
                <input
                  type="search"
                  placeholder="ស្វែងរកផលិតផល..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="w-full border-none py-2.5 px-2 pr-3 bg-white outline-none rounded-br-2xl"
                />
              </div>
            </form>
            {searchQuery && (
              <div className="absolute top-full mt-2 bg-white w-full border rounded-b-2xl z-10">
                {searchResults.length > 0 ? (
                  <ul className="max-h-60 overflow-y-auto">
                    {searchResults.map((product) => (
                      <li key={product.id} className="p-2 hover:bg-gray-100">
                        <Link
                          to={`/detail/${product.id}`}
                          state={{ product: product }}
                          className="flex items-center space-x-2"
                        >
                          <img
                            src={product.image}
                            alt={product.model}
                            className="w-12 h-12 object-cover"
                          />
                          <div>
                            <p className="text-sm font-font">{product.model}</p>
                            <p className="text-xs text-gray-500">
                              {product.price} $
                            </p>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="p-2 text-center text-sm text-gray-500">
                    គ្មានលទ្ធផល!
                  </p>
                )}
              </div>
            )}
          </div>
        )}
      </div>
      <div className="w-full border-b">
        <div className="md:w-11/12 m-auto md:flex md:items-center hidden">
          <ul className="md:flex md:items-center py-3 w-full">
            {navbar.map((page) => (
              <li key={page.id} className="md:mx-4">
                <Link
                  to={page.href}
                  onClick={() => handleLinkClick(page.href)}
                  className={`md:flex md:items-center font-font hover:text-blueHover transition ease-in-out delay-150 duration-150 ${
                    activeLink === page.href ? "text-blueHover" : ""
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
      <ul
        className={`md:hidden absolute right-0 top-16 bg-slate-200 mr-2 z-20 ${
          isMobileMenuOpen ? "" : "hidden"
        }`}
      >
        {navbar.map((page) => (
          <Link
            key={page.id}
            to={page.href}
            onClick={() => handleLinkClick(page.href)}
          >
            <li
              className={`mb-3 hover:bg-blueHover hover:text-white py-1 px-3 font-font transition ease-in-out delay-150 duration-150 ${
                activeLink === page.href ? "bg-blueHover text-white" : ""
              }`}
            >
              {page.page}
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
};

export default Header;
