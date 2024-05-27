// Products.tsx
import React from "react";
import { ProductDiscountType } from "../../../Data/Pro_discount";

interface ProductsProps {
  products: ProductDiscountType[];
  type: string;
}

const Products: React.FC<ProductsProps> = ({ products, type }) => {
  return (
    <div className="my-6">
      <h1 className="heading w-36 my-7">{type}</h1>
      {/* Displaying the product type */}
      {products.map((product) => (
        <div
          key={product.id}
          className="shadow-sm border rounded-md p-2  flex my-5 hover:scale-105 transition-all ease-linear duration-200 delay-75 cursor-pointer"
        >
          <div className="w-[140px] bg-black mr-3">
            <img src={product.image} alt={product.model} className="w-full" />
          </div>
          <div className="w-[230px]">
            <h3 className="my-4 text-colorProduct font-font font-semibold">
              {product.model}
            </h3>
            <p className="text-lg text-red-400 line-through font-font">
              {product.price.toFixed(2)} $
            </p>
            <h3 className=" bg-blueHover w-24 text-center py-1 font-font font-medium text-white rounded-full">
              {product.dis_price.toFixed(2)} $
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
