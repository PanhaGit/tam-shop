import PopularProducts from "./PopularProducts";
import {
  Electronics,
  smartWatch,
  phoneComputer,
  KarlSiliconeCase,
  TabletStandHolder,
} from "../../Data/Pro_discount";
const Popular = () => {
  return (
    <>
      <div className="flex justify-center items-center my-7 flex-col">
        <h1 className="font-font  relative font-semibold text-center md:text-3xl text-2xl PopularProducts">
          ផលិតផលកំពុងពេញនិយម
        </h1>
        <div className="bg-blueHover h-0.5 w-28 mt-1"></div>
      </div>
      <PopularProducts
        ProductDiscount={Electronics}
        text="ឧបករណ៍អេឡិចត្រូនិច"
      />
      <PopularProducts ProductDiscount={smartWatch} text="នាឡិកាឆ្លាតវៃ" />
      <PopularProducts ProductDiscount={KarlSiliconeCase} text="សំបកការពារ" />
      <PopularProducts
        ProductDiscount={phoneComputer}
        text="ឧបករណ៍បំពងសម្លេង"
      />
      <PopularProducts ProductDiscount={TabletStandHolder} text="កាស" />
    </>
  );
};

export default Popular;
