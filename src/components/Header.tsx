import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import Logo from "../assets/logo.png";
import { FaTimes } from "react-icons/fa";
import { MdShoppingCartCheckout } from "react-icons/md";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Navbar from "./Navber";

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const { cart } = useCart();
  console.log(cart);

  return (
    <>
      <div className="bg-white md:border-b md:pb-1 ">
        <div className="bg-white bg m-auto w-[95%] md:w-11/12 py-2 md:h-full flex justify-between items-center">
          <div className="w-1/2 md:w-[30%] lg:w-[15%] flex justify-center items-center">
            <img
              src={Logo}
              alt="Company Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="hidden md:flex md:w-[60%] lg:w-[50%] h-full md:border-2 border rounded-tl-2xl rounded-br-2xl">
            <form className="flex items-center justify-center w-full h-full">
              <div className="md:w-[30%] flex items-center justify-between py-2.5 pr-3">
                <h1 className="text-sm md:text-base px-2 font-font">ទាំងអស់</h1>
                <RiArrowDropDownLine className="text-xl md:text-2xl" />
              </div>
              <div className="w-full">
                <input
                  type="search"
                  placeholder="ស្វែងរកផលិតផល..."
                  className="w-full border py-2.5 px-6 font-font outline-none rounded-br-2xl"
                />
              </div>
            </form>
          </div>
          <div className=" lg:flex  h-full items-center">
            <Link to={"/add_to_cart"} className="flex items-center ">
              <MdShoppingCartCheckout size={30} />
              <div>
                <span className="bg-red-400 text-white h-5 w-5 flex items-center justify-center rounded-full">
                  {cart.length}
                </span>
                <p>Cart</p>
              </div>
            </Link>
          </div>

          {/* Phone screen */}
          <div className="flex md:hidden items-center mr-8">
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
          </div>
          {/* Phone end screen */}
        </div>
        {/* Conditionally render the search form on small screens */}
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
                  className="w-full border-none py-2.5 px-2 pr-3 bg-white outline-none rounded-br-2xl"
                />
              </div>
            </form>
          </div>
        )}
      </div>
      <Navbar />
    </>
  );
};

export default Header;
