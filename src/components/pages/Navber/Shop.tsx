import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import TypeProduct from "../../shop/TypeProduct";
import ProductList from "../../shop/ProductList";

const Shop = () => {
  return (
    <div className="w-full">
      <div className="md:w-11/12 w-11/12 m-auto py-2 relative">
        <div className="flex items-center my-4 space-x-2">
          <Link to={"/"}>
            <p className="font-font md:text-xl">ទំព័រដើម</p>
          </Link>
          <MdKeyboardArrowRight size={25} />
          <p className="font-font md:text-xl text-blueHover underline">ទំនិញ</p>
        </div>
        <div className="grid grid-cols-12 gap-6">
          {/* Product Categories for Desktop */}
          <div className="md:col-span-3 bg-[#F8F9FA] shadow-sm py-5 px-4 md:block hidden">
            <TypeProduct />
          </div>

          {/* Product List */}
          <div className="md:col-span-9 col-span-12">
            <ProductList />
          </div>
        </div>
        {/* Product Categories for Mobile */}
        <div className="md:hidden block absolute top-0 right-0">
          <TypeProduct />
        </div>
      </div>
    </div>
  );
};

export default Shop;
