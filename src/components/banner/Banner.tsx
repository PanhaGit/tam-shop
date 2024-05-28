/* eslint-disable prefer-const */
import { useState, useEffect } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { BannerProps } from "../../assets/banner/dataBanner";

interface BannerComponentProps {
  dataBanner: BannerProps[];
  currentSlide: number;
  setCurrentSlide: React.Dispatch<React.SetStateAction<number>>;
  onPreviousSlide: () => void;
  onNextSlide: () => void;
}

const Banner = ({
  dataBanner,
  currentSlide,
  setCurrentSlide,
  onPreviousSlide,
  onNextSlide,
}: BannerComponentProps) => {
  // State to track whether automatic sliding is enabled
  const [autoSlideEnabled, setAutoSlideEnabled] = useState(true);

  // Effect to handle automatic sliding
  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    // Function to advance to the next slide
    const autoSlide = () => {
      if (autoSlideEnabled) {
        onNextSlide();
      }
    };

    intervalId = setInterval(autoSlide, 3000);

    // Clear interval when component unmounts
    return () => clearInterval(intervalId);
  }, [autoSlideEnabled, onNextSlide]);

  // Function to toggle automatic sliding
  const toggleAutoSlide = () => {
    setAutoSlideEnabled((prev) => !prev);
  };

  return (
    <div className="md:w-full overflow-hidden relative">
      <div className="md:w-full md:h-[480px] h-[150px] flex transition-all ease-in-out duration-150 delay-150">
        {dataBanner.map((img: BannerProps, index: number) => (
          <div
            key={img.id}
            className={`flex-shrink-0 w-full h-full transition-all ease-in-out duration-150 delay-150  ${
              index === currentSlide ? "block" : "hidden"
            }`}
          >
            <img src={img.image} alt="" className="w-full h-full" />
          </div>
        ))}
      </div>

      {/* btn right and left */}
      <div className="absolute top-0 h-full w-full flex justify-between items-center z-10 px-3">
        <button
          onClick={onPreviousSlide}
          className="bg-white md:p-2 rounded-full hover:opacity-90"
        >
          <MdKeyboardArrowLeft size={30} />
        </button>
        <button
          onClick={onNextSlide}
          className="bg-white md:p-2 rounded-full hover:opacity-90"
        >
          <MdKeyboardArrowRight size={30} />
        </button>
      </div>
      {/* btn right and left */}

      {/* circrel */}
      <div className="absolute bottom-0 py-3 flex justify-center items-center gap-1 w-full">
        {dataBanner.map((circrel, index) => (
          <div
            onClick={() => setCurrentSlide(index)}
            className={`md:w-4 md:h-4 w-3 h-3 rounded-full transition-all ease-in-out duration-150 delay-150 ${
              index === currentSlide
                ? "bg-white md:w-8 w-6"
                : "bg-transparent border"
            }`}
            key={circrel.id}
          ></div>
        ))}
      </div>
      {/* end circrel */}

      {/* Toggle automatic sliding button */}
      <button
        onClick={toggleAutoSlide}
        className="absolute top-2 right-2  p-2 rounded-full hover:opacity-90"
      >
        {autoSlideEnabled ? "" : ""}
      </button>
    </div>
  );
};

export default Banner;
