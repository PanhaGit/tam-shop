import { MdKeyboardArrowRight, MdOutlineAddShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { ProductDiscountType } from "../../Data/Pro_discount";
import { useCart } from "../../context/CartContext";
interface ProductsProps {
  ProductDiscount: ProductDiscountType[];
  text: string;
}

const PopularProducts: React.FC<ProductsProps> = ({
  ProductDiscount,
  text,
}) => {
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
    <div className="w-full">
      <div className="flex items-center justify-between">
        <h1
          className="bg-blueHover w-60 py-2 text-lg text-white px-2 font-font font-semibold"
          style={{ clipPath: "polygon(0 0, 59% 0, 79% 100%, 0% 100%)" }}
        >
          {text}
        </h1>
        <Link to="/shop" className="flex items-center text-blueHover font-font">
          <p>មើលបន្ថែម</p>
          <MdKeyboardArrowRight size={20} />
        </Link>
      </div>
      <div className="bg-blueHover md:w-full h-1 relative left-0 bottom-1"></div>

      {/* Card */}
      <div className="lg:grid lg:grid-cols-4 lg:gap-6 md:grid md:grid-cols-3 md:gap-5 grid grid-cols-2 gap-3 my-5">
        {ProductDiscount.length === 0 ? (
          <p className="text-center text-lg">មិនមានផលិតផល!</p>
        ) : (
          ProductDiscount.map((popular: ProductDiscountType) => (
            <div
              key={popular.id}
              className="shadow-sm border rounded-xl overflow-hidden hover:shadow-lg cursor-pointer transition-all ease-linear delay-75 duration-150"
            >
              <Link
                to={`/detail/${popular.id}`}
                key={popular.id}
                state={{ product: popular }}
              >
                <div className="md:w-full bg-black md:h-[250px] w-full h-[150px] relative">
                  <img
                    src={popular.image}
                    alt={`${popular.brand} product`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </Link>
              <div className="p-4">
                <h3 className="font-bold text-lg text-colorProduct">
                  {popular.model}
                </h3>
                <p className="text-lg font-semibold text-red-500">
                  {popular.price} $
                </p>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleAddToCart(popular);
                  }}
                  className="flex items-center font-font bg-blueHover text-white px-3 py-1 rounded-md mt-2"
                >
                  <MdOutlineAddShoppingCart size={20} className="mr-1" />
                  ទិញឥវ៉ាន់
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      {/* end Card */}
    </div>
  );
};

export default PopularProducts;
