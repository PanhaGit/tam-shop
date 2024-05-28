import PopularProducts from "./PopularProducts";
import {
  Bestsellers,
  ProductDiscount,
  NewProduct,
} from "../../Data/Pro_discount";
const Popular = () => {
  return (
    <div>
      <h1 className=" text-center text-3xl PopularProducts">
        ផលិតផលកំពុងពេញនិយម
      </h1>
      <PopularProducts
        ProductDiscount={Bestsellers}
        text="ឧបករណ៍អេឡិចត្រូនិច"
      />
      <PopularProducts ProductDiscount={ProductDiscount} text="នាឡិកាឆ្លាតវៃ" />
      <PopularProducts ProductDiscount={NewProduct} text="ឧបករណ៍បំពងសម្លេង" />
    </div>
  );
};

export default Popular;
