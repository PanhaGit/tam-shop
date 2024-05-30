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
      {products.map((product) => (
        <div
          key={product.id}
          className="shadow-sm  border rounded-md p-2 flex my-5 hover:scale-105 transition-all ease-linear duration-200 delay-75 cursor-pointer"
        >
          <Link to={`/detail/${product.id}`} state={{ product: product }}>
            <div className="w-[140px] bg-black mr-3">
              <img src={product.image} alt={product.model} className="w-full" />
            </div>
          </Link>
          <div className="w-full">
            <h3 className="my-4 text-colorProduct font-font font-semibold">
              {product.model}
            </h3>
            <p className="text-lg text-red-400 line-through font-font">
              {product.price.toFixed(2)} $
            </p>
            <div className="flex items-center gap-4">
              <h3 className="bg-blueHover w-24 text-center py-1 font-font font-medium text-white rounded-full">
                {product.dis_price.toFixed(2)} $
              </h3>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleAddToCart(product);
                }}
                className="bg-blue-500 text-white px-4 py-2 mt-2"
              >
                <MdOutlineAddShoppingCart />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
