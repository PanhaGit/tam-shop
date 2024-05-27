// ProductProps.tsx
import React from "react";
import Products from "./Prodcuts";
import {
  ProductDiscount,
  Bestsellers,
  NewProduct,
} from "../../../Data/Pro_discount";
import { Link } from "react-router-dom";

const ProductProps: React.FC = () => {
  return (
    <div className="lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 gap-8">
      <Link to={"/detail"}>
        <Products products={ProductDiscount} type="ទំនិញបញ្ចុះតម្លៃ" />
      </Link>
      <Link to={"/detail"}>
        <Products products={Bestsellers} type="ទំនិញលក់ដាច់" />
      </Link>
      <Link to={"/detail"}>
        <Products products={NewProduct} type="ទើបមកដល់ថ្មី" />
      </Link>
    </div>
  );
};

export default ProductProps;
