import smartwatch from "./watch1.jpg";
import msi from "./msi1.jpg";
import oppo from "./oppo1.jpg";
import asus from "./asus.jpg";

export interface BannerProps {
  id: number;
  image: string;
}

const dataBanner: BannerProps[] = [
  {
    id: 1,
    image: smartwatch,
  },
  {
    id: 2,
    image: msi,
  },
  {
    id: 3,
    image: oppo,
  },
  {
    id: 4,
    image: asus,
  },
];

export default dataBanner;
