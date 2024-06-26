import { useState } from "react";
import Banner from "../../banner/Banner";
import dataBanner from "../../../assets/banner/dataBanner";
import ProductProps from "../../Home/product/ProductProps";
import Popular from "../../Popularproducts/Popular";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePreviousSlide = () => {
    const newIndex =
      currentSlide === 0 ? dataBanner.length - 1 : currentSlide - 1;
    setCurrentSlide(newIndex);
    // console.log("Previous Slide Index:", newIndex);
  };

  const handleNextSlide = () => {
    const newIndex =
      currentSlide === dataBanner.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newIndex);
    // console.log("Next Slide Index:", newIndex);
  };

  return (
    <div className="md:w-full w-full">
      <div className="md:w-11/12 md:m-auto w-full">
        <Banner
          dataBanner={dataBanner}
          currentSlide={currentSlide}
          setCurrentSlide={setCurrentSlide}
          onPreviousSlide={handlePreviousSlide}
          onNextSlide={handleNextSlide}
        />
      </div>
      <div className="md:w-11/12 m-auto w-11/12">
        <ProductProps />
        <Popular />
      </div>
    </div>
  );
};

export default Home;
