import React from "react";
import { ProductDiscountType } from "../../../Data/Pro_discount";
import { Link } from "react-router-dom";
import { useCart } from "../../../context/CartContext";
import { MdOutlineAddShoppingCart } from "react-icons/md";

interface ProductsProps {
  products: ProductDiscountType[];
  type: string;
}

const Products: React.FC<ProductsProps> = ({ products, type }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (product: ProductDiscountType) => {
    addToCart({
      id: product.id,
      model: product.model,
      quantity: 1,
      image: product.image,
      brand: product.brand,
      dis_price: product.dis_price,
    });
  };

  return (
    <div className="my-6">
      <h1 className="heading w-36 my-7">{type}</h1>
      <div className="m-auto ">
        {products.map((product) => (
          <div
            key={product.id}
            className="shadow-sm border md:w-[450px] md:h-[140px] w-full  h-[160px] rounded-md p1 flex items-center overflow-hidden my-5 hover:scale-105 transition-all ease-linear duration-200 delay-75 cursor-pointer"
          >
            <Link to={`/detail/${product.id}`} state={{ product: product }}>
              <div className="md:w-[150px] w-[150px] h-full md:h-full p-2 mr-3">
                <img
                  src={product.image}
                  alt={product.model}
                  className="md:w-full md:h-full w-full h-full"
                />
              </div>
            </Link>
            <div className="w-full flex flex-col justify-center">
              <h3 className=" text-colorProduct font-font font-semibold text-[16px]">
                {product.model}
              </h3>
              <div className="flex gap-3 my-2 items-center">
                <p className="text-lg text-red-400 line-through font-font">
                  {product.price.toFixed(2)} $
                </p>
                <h3 className="bg-blueHover w-24 text-center py-1 font-font font-medium text-white rounded-full">
                  {product.dis_price.toFixed(2)} $
                </h3>
              </div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleAddToCart(product);
                }}
                className="flex items-center font-font bg-blueHover text-white px-1 py-1 w-24 rounded-md mt-2"
              >
                <MdOutlineAddShoppingCart size={20} className="mr-1" />
                ទិញឥវ៉ាន់
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
