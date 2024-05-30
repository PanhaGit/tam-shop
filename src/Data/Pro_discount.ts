// Importing product images for ProductDiscount
import pro1_dic from "../assets/product/Pro_discount/AppleAirPodsPro_2nd_Gen_WirelessEarbuds.png";
import pro2_dic from "../assets/product/Pro_discount/HDBlackAppleSmartWatch_Series2.png";
import pro3_dic from "../assets/product/Pro_discount/moreFitSmartwatchWaterproofActivityPedometer.png";

// Importing product images for Bestsellers
import pro1_bestsellers from "../assets/product/pro_bestsellers/1.png";
import pro2_bestsellers from "../assets/product/pro_bestsellers/2.png";
import pro3_bestsellers from "../assets/product/pro_bestsellers/3.png";
import pro4_bestsellers from "../assets/product/pro_bestsellers/4.jpg";
import pro5_bestsellers from "../assets/product/pro_bestsellers/5.jpg";

// Importing product images for NewProduct
import pro1_new from "../assets/product/pro_new/1.png";
import pro2_new from "../assets/product/pro_new/2.png";
import pro3_new from "../assets/product/pro_new/3.jpg";
import pro4_new from "../assets/product/pro_new/4.png";
import pro5_new from "../assets/product/pro_new/Adjustable2400DPIOpticalWirelessMouse.png";

// Defining the ProductDiscountType interface
export interface ProductDiscountType {
  id: number;
  model: string;
  dis_price: number;
  price: number;
  amount: number;
  image: string;
  brand: string;
  advantages?: string[];
}

// Defining the ProductDiscount array
export const ProductDiscount: ProductDiscountType[] = [
  {
    id: 1,
    model: "Apple AirPods Pro (2nd Gen) Wireless Earbuds",
    dis_price: 199.99,
    price: 249.99,
    amount: 50,
    image: pro1_dic,
    brand: "Apple",
    advantages: [
      "បំបាត់សម្លេងរំខាន",
      "របៀបបញ្ចេញសំឡេងសម្រាប់ស្តាប់និងអន្តរកម្មជាមួយពិភពលើកិច្ចការទូទៅ",
      "ភាពត្រឹមត្រូវនិងស្រួល",
      "សម្លេងតាមស្ថានភាពនិងចលនាក្បាល",
      "កែសំរួល EQ",
    ],
  },
  {
    id: 2,
    model: "HD Black Apple SmartWatch Series 2",
    dis_price: 149.99,
    price: 199.99,
    amount: 30,
    image: pro2_dic,
    brand: "Apple",
    advantages: [
      "GPS ដែលបង្កប់ក្នុង",
      "អាចជ្រាបទឹកបានរហូតដល់ 50 ម៉ែត្រ",
      "ប្រព័ន្ធប្រតិបត្តិការសងខាង",
      "ឧបករណ៍វាស់ចង្វាក់បេះដូង",
      "ការតាមដានសកម្មភាពពេញលេញ",
    ],
  },
  {
    id: 3,
    model: "Smart Watch for Women",
    dis_price: 59.99,
    price: 79.99,
    amount: 20,
    image: pro3_dic,
    brand: "moreFit",
    advantages: [
      "ការរចនាអាចជ្រាបទឹក",
      "ការតាមដានសកម្មភាពនិងការគេង",
      "ម៉ូដកីឡាច្រើន",
      "ឧបករណ៍វាស់ចង្វាក់បេះដូង",
      "អាយុកាលថ្មវែង",
    ],
  },
];

// Defining the Bestsellers array
export const Bestsellers: ProductDiscountType[] = [
  {
    id: 4,
    model: "Smart Watch Series 1",
    dis_price: 199.99,
    price: 299.99,
    amount: 40,
    image: pro1_bestsellers,
    brand: "BrandX",
    advantages: [
      "អេក្រង់រូបភាពជ្រាលជ្រៅ",
      "ជម្រើសការតាមដានសុខភាពជាច្រើន",
      "នាឡិកាដែលអាចប្ដូររូបរាងបាន",
      "អាយុកាលថ្មវែង",
      "តម្លៃសមរម្យ",
    ],
  },
  {
    id: 5,
    model: "Wireless Earbuds V2",
    dis_price: 99.99,
    price: 149.99,
    amount: 60,
    image: pro2_bestsellers,
    brand: "BrandY",
    advantages: [
      "សម្លេងដែលមានគុណភាពខ្ពស់",
      "សំរាប់ត្រចៀកដែលមានផាសុខភាព",
      "អាយុកាលថ្មវែង",
      "ការបញ្ចូលថ្មលឿន",
      "Bluetooth 5.0",
    ],
  },
  {
    id: 6,
    model: "Fitness Tracker 2021",
    dis_price: 49.99,
    price: 79.99,
    amount: 100,
    image: pro3_bestsellers,
    brand: "FitTrack",
    advantages: [
      "ការតាមដានសកម្មភាពកម្រិតខ្ពស់",
      "ឧបករណ៍វាស់ចង្វាក់បេះដូង",
      "ការតាមដានការគេង",
      "ការរចនាអាចជ្រាបទឹក",
      "អាយុកាលថ្មវែង",
    ],
  },
  {
    id: 7,
    model: "Smart Watch Series 4",
    dis_price: 299.99,
    price: 399.99,
    amount: 25,
    image: pro4_bestsellers,
    brand: "BrandX",
    advantages: [
      "អេក្រង់រូបភាពជ្រាលជ្រៅ",
      "ការតាមដានសុខភាពកម្រិតខ្ពស់",
      "GPS ដែលបង្កប់ក្នុង",
      "អាចជ្រាបទឹក",
      "នាឡិកាដែលអាចប្ដូររូបរាងបាន",
    ],
  },
  {
    id: 8,
    model: "In-Ear Headphones",
    dis_price: 19.99,
    price: 29.99,
    amount: 150,
    image: pro5_bestsellers,
    brand: "SoundPro",
    advantages: [
      "តម្លៃសមរម្យ",
      "សំរាប់ត្រចៀកដែលមានផាសុខភាព",
      "គុណភាពសម្លេងល្អ",
      "ការរចនាដែលងាយស្រួលយកតាម",
      "គុណភាពដែលប្រើប្រាស់បានយូរ",
    ],
  },
];

// Defining the NewProduct array
export const NewProduct: ProductDiscountType[] = [
  {
    id: 9,
    model: "JBL - GO3 Portable Waterproof Wireless Speaker - Blue",
    dis_price: 199.99,
    price: 249.99,
    amount: 50,
    image: pro1_new,
    brand: "JBL",
    advantages: [
      "ការរចនាដែលងាយស្រួលយកតាម",
      "អាចជ្រាបទឹកនិងធូលី",
      "សម្លេងមានអំណាច",
      "ការតភ្ជាប់ Bluetooth",
      "អាយុកាលថ្មវែង",
    ],
  },
  {
    id: 10,
    model: "New Product 2 Model",
    dis_price: 149.99,
    price: 199.99,
    amount: 30,
    image: pro2_new,
    brand: "New Brand 2",
    advantages: [
      "ការរចនាដែលមានភាពច្នៃប្រឌិត",
      "ប្រសិទ្ធិភាពខ្ពស់",
      "គុណភាពដែលប្រើប្រាស់បានយូរ",
      "ចំណុចប្រទាក់ដែលងាយស្រួលប្រើ",
      "តម្លៃសមរម្យ",
    ],
  },
  {
    id: 11,
    model: "New Product 3 Model",
    dis_price: 59.99,
    price: 79.99,
    amount: 20,
    image: pro3_new,
    brand: "New Brand 3",
    advantages: [
      "លក្ខណៈពិសេសទី 1",
      "លក្ខណៈពិសេសទី 2",
      "លក្ខណៈពិសេសទី 3",
      "លក្ខណៈពិសេសទី 4",
      "លក្ខណៈពិសេសទី 5",
    ],
  },
  {
    id: 12,
    model: "Baseus Magnetic Power Bank",
    dis_price: 99.99,
    price: 129.99,
    amount: 10,
    image: pro4_new,
    brand: "Baseus",
    advantages: [
      "ការភ្ជាប់ដោយមេដែក",
      "សមត្ថភាពខ្ពស់",
      "ការបញ្ចូលថ្មលឿន",
      "ការរចនាដែលមានទំហំតូច",
      "ការសំគាល់ថ្ម LED",
    ],
  },
  {
    id: 13,
    model: "Adjustable 2400 DPI Optical Wireless Mouse",
    dis_price: 29.99,
    price: 39.99,
    amount: 15,
    image: pro5_new,
    brand: "BrandZ",
    advantages: [
      "ការកំណត់ DPI ដែលអាចកែប្រែបាន",
      "ការរចនាដែលមានផាសុខភាព",
      "ការតភ្ជាប់ឥតខ្សែ",
      "អាយុកាលថ្មវែង",
      "ភ្ជាប់និងលេង",
    ],
  },
];
