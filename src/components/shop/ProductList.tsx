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
import { useEffect, useState } from "react";

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

  const [sortOption, setSortOption] = useState<string>("default");
  const [filteredProducts, setFilteredProducts] = useState<
    ProductDiscountType[]
  >([]);

  useEffect(() => {
    let products = selectedType
      ? allProducts.filter((product) => product.typeProduct === selectedType)
      : allProducts;

    // Sorting logic based on the selected sortOption
    switch (sortOption) {
      case "price-asc":
        products = [...products].sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        products = [...products].sort((a, b) => b.price - a.price);
        break;
      case "name-asc":
        products = [...products].sort((a, b) => a.model.localeCompare(b.model));
        break;
      case "name-desc":
        products = [...products].sort((a, b) => b.model.localeCompare(a.model));
        break;
      default:
        break;
    }

    setFilteredProducts(products);
  }, [selectedType, sortOption]);

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

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(event.target.value);
  };

  return (
    <>
      <div className="w-full bg-[#F8F9FA] py-4 mb-6">
        <label
          htmlFor="sorting-options"
          className="mx-2 font-font text-lg opacity-90"
        >
          តម្រៀប:
        </label>
        <select
          name="sorting-options"
          id="sorting-options"
          value={sortOption}
          onChange={handleSortChange}
          className="py-2 px-3 border rounded-md font-font outline-blueHover"
        >
          <option value="default">ទម្រង់ដើម</option>
          <option value="price-asc">តម្លៃ: ទាបទៅខ្ពស់</option>
          <option value="price-desc">តម្លៃ: ខ្ពស់ទៅទាប</option>
          <option value="name-asc">ឈ្មោះ: ពី A ទៅ Z</option>
          <option value="name-desc">ឈ្មោះ: ពី Z ទៅ A</option>
        </select>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 md:gap-6 gap-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((popular) => (
            <div
              key={popular.id}
              className="shadow-sm border rounded-xl overflow-hidden hover:shadow-lg cursor-pointer transition-all ease-linear delay-75 duration-150"
            >
              <Link
                to={`/detail/${popular.id}`}
                key={popular.id}
                state={{ product: popular }}
              >
                <div className="md:w-full  md:h-[250px] w-full h-[150px] relative">
                  <img
                    src={popular.image}
                    alt={`${popular.brand} product`}
                    className="w-full h-full object-cover hover:scale-110 transition ease-linear duration-75 delay-75"
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
        ) : (
          <h1 className="col-span-full text-center text-red-500 text-2xl font-medium font-font ">
            មិនមានផលិតផល!
          </h1>
        )}
      </div>
    </>
  );
};

export default ProductList;
