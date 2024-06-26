// Detail.tsx
import { useLocation } from "react-router-dom";
import { ProductDiscountType } from "../../Data/Pro_discount";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { RiArrowDropRightLine } from "react-icons/ri";
import { useCart } from "../../context/CartContext";

const Detail = () => {
  const location = useLocation();
  const product = location.state?.product as ProductDiscountType;
  // add to cart
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

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="w-full">
      <div className="flex border ">
        <div className="flex p-2 md:w-11/12 m-auto items-center">
          <Link to={"/"}>
            <p className="font-font md:text-lg text-sm">ទំព័រដើម</p>
          </Link>
          <RiArrowDropRightLine size={30} />
          <p className="font-font md:text-lg text-sm">{product.model}</p>
        </div>
      </div>
      <div className="w-11/12 mx-auto py-4 px-4 md:px-0">
        <div className="w-full mx-auto">
          <div className="w-full flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 h-[320px] md:h-[600px] bg-black rounded-md">
              <img
                src={product.image}
                alt={`${product.brand} product`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 md:ml-6 mt-4 md:mt-0 ">
              <h1 className="text-2xl md:text-3xl font-bold">
                {product.model}
              </h1>
              <p className="text-lg text-gray-700 mb-2">
                Brand: {product.brand}
              </p>
              <p className="text-xl md:text-2xl font-semibold text-red-600 mb-4">
                ${product.dis_price}
                <span className="text-gray-500 line-through ml-2">
                  ${product.price}
                </span>
              </p>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleAddToCart(product);
                }}
                className="flex items-center font-font bg-blueHover text-white px-3 py-1 rounded-md mt-2"
              >
                <MdOutlineAddShoppingCart size={20} className="mr-1" />
                ទិញឥវ៉ាន់
              </button>
              {product.advantages && (
                <div className="mt-4 font-font">
                  <h2 className="text-lg font-semibold font-font">
                    លក្ខណៈសម្បត្តិ
                  </h2>
                  <ul className="list-disc pl-5">
                    {product.advantages.map((advantage, index) => (
                      <li key={index} className="text-lg py-2">
                        {advantage}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
