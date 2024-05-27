// ProductDiscount
import pro1_dic from "../assets/product/Pro_discount/AppleAirPodsPro_2nd_Gen_WirelessEarbuds.png";
import pro2_dic from "../assets/product/Pro_discount/HDBlackAppleSmartWatch_Series2.png";
import pro3_dic from "../assets/product/Pro_discount/moreFitSmartwatchWaterproofActivityPedometer.png";

// Bestsellers
import pro1_bestsellers from "../assets/product/pro_bestsellers/1.png";
import pro2_bestsellers from "../assets/product/pro_bestsellers/2.png";
import pro3_bestsellers from "../assets/product/pro_bestsellers/3.png";
import pro4_bestsellers from "../assets/product/pro_bestsellers/4.jpg";
import pro5_bestsellers from "../assets/product/pro_bestsellers/5.jpg";

//new prodcut
import pro1_new from "../assets/product/pro_new/1.png";
import pro2_new from "../assets/product/pro_new/2.png";
// import pro3_new from "../assets/product/pro_new/3.jpg";
import pro4_new from "../assets/product/pro_new/4.png";
import pro5_new from "../assets/product/pro_new/Adjustable2400DPIOpticalWirelessMouse.png";

export interface ProductDiscountType {
  id: number;
  model: string;
  dis_price: number;
  price: number;
  amount: number;
  image: string;
  brand: string;
}

export const ProductDiscount: ProductDiscountType[] = [
  {
    id: 1,
    model: "Apple AirPods Pro (2nd Gen) Wireless Earbuds",
    dis_price: 199.99,
    price: 249.99,
    amount: 50,
    image: pro1_dic,
    brand: "Apple",
  },
  {
    id: 2,
    model: "HD Black Apple SmartWatch Series 2",
    dis_price: 149.99,
    price: 199.99,
    amount: 30,
    image: pro2_dic,
    brand: "Apple",
  },
  {
    id: 3,
    model: "Smart Watch for Women",
    dis_price: 59.99,
    price: 79.99,
    amount: 20,
    image: pro3_dic,
    brand: "moreFit",
  },
];

export const Bestsellers: ProductDiscountType[] = [
  {
    id: 1,
    model: "Smart Watch Series 1",
    dis_price: 199.99,
    price: 299.99,
    amount: 40,
    image: pro1_bestsellers,
    brand: "BrandX",
  },
  {
    id: 2,
    model: "Wireless Earbuds V2",
    dis_price: 99.99,
    price: 149.99,
    amount: 60,
    image: pro2_bestsellers,
    brand: "BrandY",
  },
  {
    id: 3,
    model: "Fitness Tracker 2021",
    dis_price: 49.99,
    price: 79.99,
    amount: 100,
    image: pro3_bestsellers,
    brand: "FitTrack",
  },
  {
    id: 4,
    model: "Smart Watch Series 4",
    dis_price: 299.99,
    price: 399.99,
    amount: 25,
    image: pro4_bestsellers,
    brand: "BrandX",
  },
  {
    id: 5,
    model: "In-Ear Headphones",
    dis_price: 19.99,
    price: 29.99,
    amount: 150,
    image: pro5_bestsellers,
    brand: "SoundPro",
  },
];

export const NewProduct: ProductDiscountType[] = [
  {
    id: 1,
    model: "JBL - GO3 Portable Waterproof Wireless Speaker - Blue",
    dis_price: 199.99,
    price: 249.99,
    amount: 50,
    image: pro1_new,
    brand: "JBL",
  },
  {
    id: 2,
    model: "New Product 2 Model",
    dis_price: 149.99,
    price: 199.99,
    amount: 30,
    image: pro2_new,
    brand: "New Brand 2",
  },
  // {
  //   id: 3,
  //   model: "New Product 3 Model",
  //   dis_price: 59.99,
  //   price: 79.99,
  //   amount: 20,
  //   image: pro3_new,
  //   brand: "New Brand 3",
  // },
  {
    id: 4,
    model: "Baseus Magnetic Power Bank",
    dis_price: 99.99,
    price: 129.99,
    amount: 10,
    image: pro4_new,
    brand: "Baseus",
  },
  {
    id: 5,
    model: "Adjustable 2400 DPI Optical Wireless Mouse",
    dis_price: 29.99,
    price: 39.99,
    amount: 15,
    image: pro5_new,
    brand: "BrandZ",
  },
];
