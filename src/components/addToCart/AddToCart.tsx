import React, { useState } from "react";
import { useCart } from "../../context/CartContext";
import emptyCart from "../../assets/cart.jpg";
import { Link } from "react-router-dom";
import { RiArrowDropRightLine } from "react-icons/ri";
import aba from "../../assets/ABA/aba.jpg";

const AddToCart: React.FC = () => {
  const { cart, removeFromCart } = useCart();
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

  return (
    <div className="w-full">
      <div className="flex border ">
        <div className="flex p-2 md:w-11/12 m-auto items-cente">
          <Link to={"/"}>
            <p className="font-font md:text-xl text-lg">ទំព័រដើម</p>
          </Link>
          <RiArrowDropRightLine size={30} />
          <p className="font-font md:text-xl text-lg text-blueHover underline">
            Page Deteil
          </p>
        </div>
      </div>
      <div className="w-11/12 mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4 text-center font-font">
          Your Cart
        </h1>
        {cart.length === 0 ? (
          <img
            src={emptyCart}
            className="w-[500px] m-auto h-[500px]"
            alt="Empty Cart"
          />
        ) : (
          <div>
            <ul>
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between border-b py-4"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.model}
                      className="w-16 h-16 rounded-full"
                    />
                    <div>
                      <p className="text-lg font-semibold">{item.model}</p>
                      <p className="text-sm text-gray-500">
                        Brand: {item.brand}
                      </p>
                      <p className="text-sm">Quantity: {item.quantity}</p>
                    </div>
                  </div>
                  <p className="text-lg font-semibold">
                    ${(item.dis_price * item.quantity).toFixed(2)}
                  </p>
                  <button
                    onClick={() => handleRemoveItem(item.id)} // Pass the itemId to the handler function
                    className="text-red-500 font-bold"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <button
                className="bg-blue-500 text-white px-4 py-2 mt-4 w-full rounded-md hover:bg-blue-600"
                onClick={() => handleCheckoutClick(aba)} // Pass the image URL to the handler function
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
      {/* Modal */}
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-8 rounded-md relative">
            <img
              src={modalImage}
              alt="Product"
              className="w-full md:h-[600px] h-[300px]  object-contain"
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
