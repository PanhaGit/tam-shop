import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
// import p1 from "../../assets/product/p1.png";
import { ProductDiscountType } from "../../Data/Pro_discount";

interface ProductsProps {
  ProductDiscount: ProductDiscountType[];
  text: string;
}
const PopularProducts: React.FC<ProductsProps> = ({
  ProductDiscount,
  text,
}) => {
  return (
    <div className="w-full my-12">
      <div className="flex items-center justify-between">
        <h1
          className=" bg-blueHover w-60 py-3 text-lg text-white px-2 font-font font-semibold"
          style={{
            clipPath: "polygon(0 0, 59% 0, 79% 100%, 0% 100%)",
          }}
        >
          {text}
        </h1>
        <Link
          to={"/shop"}
          className="flex items-center text-blueHover font-font"
        >
          <p>មើលបន្ថែម</p>
          <MdKeyboardArrowRight size={20} />
        </Link>
      </div>
      <div className="bg-blueHover md:w-9/12 h-1 relative left-[183px] bottom-1"></div>

      {/* Card */}
      <div className="lg:grid lg:grid-cols-4 lg:gap-8 md:grid md:grid-cols-3 md:gap-5 grid grid-cols-2 gap-3 my-5">
        {ProductDiscount.map((popular: ProductDiscountType) => {
          return (
            <Link to={`/detail${popular.id}`} key={popular.id}>
              <div>
                <div className=" shadow-card rounded-3xl hover:shadow-2xl cursor-pointer transition-all ease-linear delay-75 duration-150">
                  <div className="md:w-full p-1 rounded-t-3xl md:h-[250px]  w-full h-[150px]">
                    <img
                      src={popular.image}
                      alt=""
                      className="md:w-full md:h-full w-full h-full"
                    />
                  </div>
                  <div className="md:w-full md:h-[90px] p-1 w-full h-[90px]">
                    <h3 className="font-font text-lg font-semibold text-colorProduct ">
                      {popular.brand}
                    </h3>
                    <p className="text-lg font-semibold text-red-500">
                      {popular.price}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      {/* end Card */}
    </div>
  );
};

export default PopularProducts;
