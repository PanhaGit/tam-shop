import { Link } from "react-router-dom";
import { useFilter } from "../../context/filterContext";
import { FaFilter } from "react-icons/fa";
import { useState } from "react";

interface TypeProductType {
  id: number;
  name: string;
}

const typeProductTypes: TypeProductType[] = [
  { id: 1, name: "កាស" },
  { id: 2, name: "កុំព្យូទ័រ" },
  { id: 4, name: "គ្រឿងជំនួយទូរសព្ទ" },
  { id: 5, name: "នាឡិកាឆ្លាតវៃ" },
  { id: 8, name: "ឧបករណ៍បំពងសម្លេង" },
  { id: 6, name: "ជើងត្រូ​ ទូរសព្ទ​ កុំព្យូទ័រ" },
  { id: 7, name: "ឧបករណ៍អេឡិចត្រូនិច" },
];

const TypeProduct = () => {
  const { setSelectedType } = useFilter();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [activeMenuItem, setActiveMenuItem] = useState<string>("");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = (typeName: string) => {
    setSelectedType(typeName);
    setActiveMenuItem(typeName);
    setIsMenuOpen(false);
  };

  const getMenuItemClass = (typeName: string) => {
    return typeName === activeMenuItem
      ? "text-blueHover font-bold"
      : "hover:text-blueHover";
  };

  return (
    <div>
      {/* Desktop view */}
      <div className="md:block hidden ">
        <div className="space-y-3">
          <Link to={"/shop"}>
            <h1 className="text-xl py-1.5 font-font font-semibold">
              ប្រភេទផលិតផល
            </h1>
          </Link>
          <div className="w-full h-[1px] bg-gray-200"></div>
        </div>
        {typeProductTypes.map((type) => (
          <ul key={type.id} className="my-4 font-font text-lg">
            <li
              className={`${getMenuItemClass(
                type.name
              )} transition ease-linear duration-75 cursor-pointer`}
              onClick={() => handleMenuItemClick(type.name)}
            >
              {type.name}
            </li>
          </ul>
        ))}
      </div>

      {/* Mobile view */}
      <div className="md:hidden relative block p-2 w-[230px] rounded-md">
        <div className="absolute right-0 mb-4" onClick={toggleMenu}>
          <FaFilter size={30} className="text-blueHover cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="bg-[#F8F9FA] p-2">
            {typeProductTypes.map((type) => (
              <ul key={type.id} className="my-4 font-font text-lg">
                <li
                  className={`${getMenuItemClass(
                    type.name
                  )} transition ease-linear duration-75 cursor-pointer`}
                  onClick={() => handleMenuItemClick(type.name)}
                >
                  {type.name}
                </li>
              </ul>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TypeProduct;
