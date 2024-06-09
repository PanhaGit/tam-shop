import { MdOutlineAddShoppingCart } from "react-icons/md";
import { useFilter } from "../../context/filterContext";
import {
  TabletStandHolder,
  smartWatch,
  phoneComputer,
  KarlSiliconeCase,
  Electronics,
  ProductDiscountType,
} from "../../Data/Pro_discount";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const allProducts = [
  ...TabletStandHolder,
  ...smartWatch,
  ...phoneComputer,
  ...KarlSiliconeCase,
  ...Electronics,
];

const ProductList = () => {
  const { selectedType } = useFilter();

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
  // Filter products based on selected type
  const filteredProducts = selectedType
    ? allProducts.filter((product) => product.typeProduct === selectedType)
    : allProducts;

  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 md:gap-6 gap-4">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((p) => (
          <div key={p.id} className="p-4 bg-white shadow-sm border rounded">
            <Link to={`/detail/${p.id}`} key={p.id}>
              <div className="md:w-full md:h-72 w-full h-32">
                <img
                  src={p.image}
                  alt={p.model}
                  className="md:w-full md:h-full w-full h-full object-cover mb-4"
                />
              </div>
            </Link>
            <div className="md:my-3 my-1">
              <h3 className="md:text-xl text-lg font-semibold">{p.model}</h3>
              <p className="text-gray-500">{p.brand}</p>
              <p className="text-red-500 font-semibold">
                ${p.dis_price}{" "}
                <span className="line-through text-gray-400">${p.price}</span>
              </p>
            </div>
            <div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleAddToCart(p);
                }}
                className="flex items-center font-font bg-blueHover text-white px-3 py-1 rounded-md mt-2"
              >
                <MdOutlineAddShoppingCart size={20} className="mr-1" />
                ទិញឥវ៉ាន់
              </button>
            </div>
          </div>
        ))
      ) : (
        <h1 className="col-span-full text-center text-red-500 text-2xl font-medium font-font ">
          មិនមានផលិតផល!
        </h1>
      )}
    </div>
  );
};

export default ProductList;
