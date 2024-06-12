import React, { useState } from "react";
import { useCart } from "../../context/CartContext";
import emptyCart from "../../assets/cart.jpg";
import { Link } from "react-router-dom";
import { RiArrowDropRightLine, RiDeleteBin2Fill } from "react-icons/ri";
import aba from "../../assets/ABA/aba.jpg";
import { FaMinus, FaPlus } from "react-icons/fa";
import bannerCart from "../../assets/bannerAddtoCart.jpg";

const AddToCart: React.FC = () => {
  const { cart, removeFromCart, updateCartQuantity } = useCart();
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const handleRemoveItem = (itemId: number) => {
    removeFromCart(itemId);
  };

  const handleCheckoutClick = (image: string) => {
    setModalImage(image);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleIncreaseQuantity = (itemId: number) => {
    updateCartQuantity(itemId, 1);
  };

  const handleDecreaseQuantity = (itemId: number) => {
    updateCartQuantity(itemId, -1);
  };

  const subtotal = cart
    .reduce((acc, item) => acc + item.dis_price * item.quantity, 0)
    .toFixed(2);

  return (
    <div className="w-full ">
      <div className="flex border ">
        <div className="flex p-2 md:w-11/12 m-auto items-center">
          <Link to={"/"}>
            <p className="font-font md:text-xl text-lg">ទំព័រដើម</p>
          </Link>
          <RiArrowDropRightLine size={30} />
          <p className="font-font md:text-xl text-lg text-blueHover underline">
            ការដើរទិញឥវ៉ាន់
          </p>
        </div>
      </div>
      <h1 className="text-3xl text-center py-5 font-semibold font-font underline">
        ការដើរទិញឥវ៉ាន់
      </h1>
      <div className="w-full md:h-[400px] h-[200px]">
        <img src={bannerCart} alt="bannerCart" className="w-full h-full" />
      </div>
      <div className="md:w-11/12 w-11/12 m-auto">
        <h1 className="text-3xl font-bold mb-4 text-center font-font underline">
          Your Cart
        </h1>
        {cart.length === 0 ? (
          <img
            src={emptyCart}
            className="w-[500px] m-auto h-[500px]"
            alt="Empty Cart"
          />
        ) : (
          <div className=" ">
            <ul>
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between border-b py-4"
                >
                  <div className="md:flex md:items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.model}
                      className="w-16 h-16 m-auto"
                    />
                    <div>
                      <p className="md:text-lg font-semibold">{item.model}</p>
                      <p className="text-sm text-gray-500">
                        Brand: {item.brand}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center px-1">
                    <button
                      onClick={() => handleDecreaseQuantity(item.id)}
                      className="text-white md:p-2 p-1 rounded-full font-bold bg-red-500 hover:bg-red-400 transition ease-in delay-200 drop-shadow-2xl"
                    >
                      <FaMinus />
                    </button>
                    <p className="text-sm bg-gray-100 rounded-full py-1 w-7 text-center mx-2">
                      {item.quantity}
                    </p>
                    <button
                      onClick={() => handleIncreaseQuantity(item.id)}
                      className="text-white md:p-2 p-1 rounded-full font-bold bg-green-500 hover:bg-green-400 transition ease-in delay-200 drop-shadow-2xl"
                    >
                      <FaPlus />
                    </button>
                  </div>
                  <p className="md:text-lg text-[15px] mx-1 font-semibold">
                    ${(item.dis_price * item.quantity).toFixed(2)}
                  </p>
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="text-white p-2 rounded-full font-bold bg-red-500 hover:bg-red-400 transition ease-in delay-200 drop-shadow-2xl"
                  >
                    <RiDeleteBin2Fill size={20} />
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-4 text-right">
              <p className="text-xl font-bold">Subtotal: ${subtotal}</p>
              <button
                className="bg-blueHover text-white px-4 py-2 my-4 w-full rounded-md hover:bg-blueHover hover:opacity-90 transition ease-linear duration-75 delay-75"
                onClick={() => handleCheckoutClick(aba)}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-8 rounded-md relative">
            <img
              src={modalImage}
              alt="ABA Payment"
              className="w-full md:h-[600px] h-[300px] object-contain"
            />
            <button
              className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddToCart;
