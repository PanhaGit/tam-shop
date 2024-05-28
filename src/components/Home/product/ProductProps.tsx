import React from "react";
import Products from "./Prodcuts";
import {
  ProductDiscount,
  Bestsellers,
  NewProduct,
} from "../../../Data/Pro_discount";

const ProductProps: React.FC = () => {
  return (
    <div className="lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 gap-8">
      <Products products={ProductDiscount} type="ទំនិញបញ្ចុះតម្លៃ" />
      <Products products={Bestsellers} type="ទំនិញលក់ដាច់" />
      <Products products={NewProduct} type="ទើបមកដល់ថ្មី" />
    </div>
  );
};

export default ProductProps;
