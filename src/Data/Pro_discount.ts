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

// Importing product images for Electronics
import elec1 from "../assets/Shop/Electronics/CertifiedEssriLightningChargingAirBlue.jpg";
import elec2 from "../assets/Shop/Electronics/Magnetic LEDChargingCable -Gold.jpg";
import elec3 from "../assets/Shop/Electronics/TemuRj45EthernetCable,(24awg)UtpCat 6Rj45NetworkCablePatchCordForDesktopComputers.jpg";
import elec4 from "../assets/Shop/Electronics/Terracotta Interior.jpg";
import elec5 from "../assets/Shop/Electronics/Type-c 8-in-1HubMultiportAdapter,.jpg";

// Importing product images for KarlSiliconeCase
// Importing product images for KarlSiliconeCase
import karl1 from "../assets/Shop/KarlSiliconeCase/HlCreationAccessories.jpg";
import karl2 from "../assets/Shop/KarlSiliconeCase/KarlLagerfeld.jpg";
import karl3 from "../assets/Shop/KarlSiliconeCase/KarlLagerfeldLogoCase.jpg";

// Importing product images for phone&computer
import pc1 from "../assets/Shop/phone&computer/BrookstoneWiredPurpleCatEarHeadphones.jpg";
import pc2 from "../assets/Shop/phone&computer/HeadsetforXboxOneHeandphone.jpg";
import pc3 from "../assets/Shop/phone&computer/SpiderMouse.jpg";

// Importing product images for smartWatch
import sw1 from "../assets/Shop/smartWatch/AppleWatch.jpg";
import sw2 from "../assets/Shop/smartWatch/QuartzWearables.jpg";
import sw3 from "../assets/Shop/smartWatch/RelojInteligenteBOZLUNparaMujerescon.jpg";
import sw4 from "../assets/Shop/smartWatch/SmartBandwithMultiple.jpg";
import sw5 from "../assets/Shop/smartWatch/SmartWatchT800UltraSeries8.jpg";
import sw6 from "../assets/Shop/smartWatch/YocubySmartWatchforWomen.jpg";

// Importing product images for TabletStandHolder
import tab1 from "../assets/Shop/TabletStandHolder/Choetech7-in-1Type-CToHDMIHUBLaptopStand,HUB-M48Laptop.jpg";
import tab2 from "../assets/Shop/TabletStandHolder/iphabdStandHolder.jpg";
import tab3 from "../assets/Shop/TabletStandHolder/OMOTONTabletStandHolderAdjustable.jpg";

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
  typeProduct?: string;
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

export const TabletStandHolder: ProductDiscountType[] = [
  {
    id: 14,
    model: "Choetech 7-in-1 Type-C To HDMI HUB Laptop Stand",
    dis_price: 59.99,
    price: 79.99,
    amount: 20,
    image: tab1,
    brand: "Choetech",
    typeProduct: "ជើងត្រូ​ ទូរសព្ទ​ កុំព្យូទ័រ",
    advantages: [
      "អនុប្រធានបទ 7-in-1",
      "ស្ទាត់ HDMI ដើម្បីចេញ",
      "ខ្លឹមសារសូលុយស្រឡំ និង អាចរុញបាន",
      "រចនាសំខាន់",
      "ការត្រួតពិនិត្យពង្រឹងបានល្អជាង",
    ],
  },
  {
    id: 15,
    model: "IPhabd Stand Holder",
    dis_price: 39.99,
    price: 49.99,
    amount: 30,
    image: tab2,
    brand: "IPhabd",
    typeProduct: "ជើងត្រូ​ ទូរសព្ទ​ កុំព្យូទ័រ",
    advantages: [
      "អនុប្រធានបទ 7-in-1",
      "ស្ទាត់ HDMI ដើម្បីចេញ",
      "ខ្លឹមសារសូលុយស្រឡំ និង អាចរុញបាន",
      "រចនាសំខាន់",
      "ការត្រួតពិនិត្យពង្រឹងបានល្អជាង",
    ],
  },
  {
    id: 16,
    model: "OMOTON Tablet Stand Holder Adjustable",
    dis_price: 19.99,
    price: 29.99,
    amount: 50,
    image: tab3,
    brand: "OMOTON",
    typeProduct: "ជើងត្រូ​ ទូរសព្ទ​ កុំព្យូទ័រ",
    advantages: [
      "អនុប្រធានបទ 7-in-1",
      "ស្ទាត់ HDMI ដើម្បីចេញ",
      "ខ្លឹមសារសូលុយស្រឡំ និង អាចរុញបាន",
      "រចនាសំខាន់",
      "ការត្រួតពិនិត្យពង្រឹងបានល្អជាង",
    ],
  },
];

// Defining the smartWatch array
export const smartWatch: ProductDiscountType[] = [
  {
    id: 17,
    model: "Apple Watch",
    dis_price: 299.99,
    price: 399.99,
    amount: 10,
    image: sw1,
    brand: "Apple",
    typeProduct: "នាឡិកាឆ្លាតវៃ",
    advantages: [
      "អនុប្រធានបទជុំវិញខ្លះ",
      "មានលក្ខណៈសម្បត្តិប្រសិទ្ធភាព",
      "អាចបញ្ចូលទៅកាន់ទូរស័ព្ទ",
      "មានភាពស្រស់ស្អាត",
      "មានភាពផ្លាស់ប្ដូរប្រូម៉ូតបាន",
    ],
  },
  {
    id: 18,
    model: "Quartz Wearables",
    dis_price: 199.99,
    price: 249.99,
    amount: 15,
    image: sw2,
    brand: "Quartz",
    typeProduct: "នាឡិកាឆ្លាតវៃ",
    advantages: [
      "អនុប្រធានបទជុំវិញខ្លះ",
      "មានលក្ខណៈសម្បត្តិប្រសិទ្ធភាព",
      "អាចបញ្ចូលទៅកាន់ទូរស័ព្ទ",
      "មានភាពស្រស់ស្អាត",
      "មានភាពផ្លាស់ប្ដូរប្រូម៉ូតបាន",
    ],
  },
  {
    id: 19,
    model: "Reloj Inteligente BOZLUN para Mujeres",
    dis_price: 99.99,
    price: 129.99,
    amount: 20,
    image: sw3,
    brand: "BOZLUN",
    typeProduct: "នាឡិកាឆ្លាតវៃ",
    advantages: [
      "អនុប្រធានបទជុំវិញខ្លះ",
      "មានលក្ខណៈសម្បត្តិប្រសិទ្ធភាព",
      "អាចបញ្ចូលទៅកាន់ទូរស័ព្ទ",
      "មានភាពស្រស់ស្អាត",
      "មានភាពផ្លាស់ប្ដូរប្រូម៉ូតបាន",
    ],
  },
  {
    id: 20,
    model: "Smart Band with Multiple Features",
    dis_price: 59.99,
    price: 79.99,
    amount: 25,
    image: sw4,
    brand: "SmartBand",
    typeProduct: "នាឡិកាឆ្លាតវៃ",
    advantages: [
      "អនុប្រធានបទជុំវិញខ្លះ",
      "មានលក្ខណៈសម្បត្តិប្រសិទ្ធភាព",
      "អាចបញ្ចូលទៅកាន់ទូរស័ព្ទ",
      "មានភាពស្រស់ស្អាត",
      "មានភាពផ្លាស់ប្ដូរប្រូម៉ូតបាន",
    ],
  },
  {
    id: 21,
    model: "Smart Watch T800 Ultra Series 8",
    dis_price: 199.99,
    price: 249.99,
    amount: 15,
    image: sw5,
    brand: "SmartWatch",
    typeProduct: "នាឡិកាឆ្លាតវៃ",
    advantages: [
      "អនុប្រធានបទជុំវិញខ្លះ",
      "មានលក្ខណៈសម្បត្តិប្រសិទ្ធភាព",
      "អាចបញ្ចូលទៅកាន់ទូរស័ព្ទ",
      "មានភាពស្រស់ស្អាត",
      "មានភាពផ្លាស់ប្ដូរប្រូម៉ូតបាន",
    ],
  },
  {
    id: 22,
    model: "Yocuby Smart Watch for Women",
    dis_price: 99.99,
    price: 129.99,
    amount: 20,
    image: sw6,
    brand: "Yocuby",
    typeProduct: "នាឡិកាឆ្លាតវៃ",
    advantages: [
      "អនុប្រធានបទជុំវិញខ្លះ",
      "មានលក្ខណៈសម្បត្តិប្រសិទ្ធភាព",
      "អាចបញ្ចូលទៅកាន់ទូរស័ព្ទ",
      "មានភាពស្រស់ស្អាត",
      "មានភាពផ្លាស់ប្ដូរប្រូម៉ូតបាន",
    ],
  },
];

// Defining the phone&computer array
export const phoneComputer: ProductDiscountType[] = [
  {
    id: 23,
    model: "Brookstone Wired Purple Cat Ear Headphones",
    dis_price: 39.99,
    price: 49.99,
    amount: 50,
    image: pc1,
    brand: "Brookstone",
    typeProduct: "កាស",
    advantages: [
      "របៀបស្មើភាពនិងស្មើភាពគ្រប់គ្រងគ្រឿង",
      "ខ្លឹមសារសូលុយស្រឡំ",
      "លាយគ្នា",
      "មានសំបុត្រដើម្បីរស់",
      "មានភាពស្អាត",
    ],
  },
  {
    id: 24,
    model: "Headset for Xbox One",
    dis_price: 29.99,
    price: 39.99,
    amount: 60,
    image: pc2,
    brand: "Xbox",
    typeProduct: "កាស",
    advantages: [
      "របៀបស្មើភាពនិងស្មើភាពគ្រប់គ្រងគ្រឿង",
      "ខ្លឹមសារសូលុយស្រឡំ",
      "លាយគ្នា",
      "មានសំបុត្រដើម្បីរស់",
      "មានភាពស្អាត",
    ],
  },
  {
    id: 25,
    model: "Spider Mouse",
    dis_price: 19.99,
    price: 29.99,
    amount: 70,
    image: pc3,
    brand: "Spider",
    typeProduct: "កាស",
    advantages: [
      "របៀបស្មើភាពនិងស្មើភាពគ្រប់គ្រងគ្រឿង",
      "ខ្លឹមសារសូលុយស្រឡំ",
      "លាយគ្នា",
      "មានសំបុត្រដើម្បីរស់",
      "មានភាពស្អាត",
    ],
  },
];

// Defining the KarlSiliconeCase array
export const KarlSiliconeCase: ProductDiscountType[] = [
  {
    id: 26,
    model: "Hl Creation Accessories",
    dis_price: 29.99,
    price: 39.99,
    amount: 40,
    image: karl1,
    brand: "Hl Creation",
    typeProduct: "សំបកការពារ",
    advantages: [
      "សម្បករបៀបសុស្តារជាបឋមពិសេស",
      "ការទទួលស្នើជាបឋមពិសេស",
      "សេចក្ដីគ្រប់គ្រងមានសារសូលុយស្រឡំ",
      "ពណ៌មានគ្រាប់",
      "ការរង់ចាំដោយសេរី",
    ],
  },
  {
    id: 27,
    model: "Karl Lagerfeld",
    dis_price: 39.99,
    price: 49.99,
    amount: 50,
    image: karl2,
    brand: "Karl Lagerfeld",
    typeProduct: "សំបកការពារ",
    advantages: [
      "សម្បករបៀបសុស្តារជាបឋមពិសេស",
      "ការទទួលស្នើជាបឋមពិសេស",
      "សេចក្ដីគ្រប់គ្រងមានសារសូលុយស្រឡំ",
      "ពណ៌មានគ្រាប់",
      "ការរង់ចាំដោយសេរី",
    ],
  },
  {
    id: 28,
    model: "Karl Lagerfeld Logo Case",
    dis_price: 49.99,
    price: 59.99,
    amount: 60,
    image: karl3,
    brand: "Karl Lagerfeld",
    typeProduct: "សំបកការពារ",
    advantages: [
      "សម្បករបៀបសុស្តារជាបឋមពិសេស",
      "ការទទួលស្នើជាបឋមពិសេស",
      "សេចក្ដីគ្រប់គ្រងមានសារសូលុយស្រឡំ",
      "ពណ៌មានគ្រាប់",
      "ការរង់ចាំដោយសេរី",
    ],
  },
];

// Defining the Electronics array
export const Electronics: ProductDiscountType[] = [
  {
    id: 29,
    model: "Certified Essri Lightning Charging Air Blue",
    dis_price: 19.99,
    price: 29.99,
    amount: 100,
    image: elec1,
    brand: "Essri",
    typeProduct: "ឧបករណ៍អេឡិចត្រូនិច",
    advantages: [
      "ការទទួលស្នើជាបឋមពិសេស",
      "ការគាំទ្រប្រូតុងពេញនិងប្រសិទ្ធភាព",
      "ខ្លឹមសារសូលុយស្រឡំ",
      "អាចត្រួតពិនិត្យការដោះស្រាយនៅតំបន់ងាយស្រួល",
      "ការលក់ពិសេស",
    ],
  },
  {
    id: 30,
    model: "Magnetic LED Charging Cable - Gold",
    dis_price: 14.99,
    price: 24.99,
    amount: 120,
    image: elec2,
    brand: "Magnetic",
    typeProduct: "ឧបករណ៍អេឡិចត្រូនិច",
    advantages: [
      "ការទទួលស្នើជាបឋមពិសេស",
      "ការគាំទ្រប្រូតុងពេញនិងប្រសិទ្ធភាព",
      "ខ្លឹមសារសូលុយស្រឡំ",
      "អាចត្រួតពិនិត្យការដោះស្រាយនៅតំបន់ងាយស្រួល",
      "ការលក់ពិសេស",
    ],
  },
  {
    id: 31,
    model: "Temu Rj45 ",
    dis_price: 9.99,
    price: 14.99,
    amount: 150,
    image: elec3,
    brand: "Temu",
    typeProduct: "ឧបករណ៍អេឡិចត្រូនិច",
    advantages: [
      "ការទទួលស្នើជាបឋមពិសេស",
      "ការគាំទ្រប្រូតុងពេញនិងប្រសិទ្ធភាព",
      "ខ្លឹមសារសូលុយស្រឡំ",
      "អាចត្រួតពិនិត្យការដោះស្រាយនៅតំបន់ងាយស្រួល",
      "ការលក់ពិសេស",
    ],
  },
  {
    id: 32,
    model: "Terracotta Interior",
    dis_price: 29.99,
    price: 39.99,
    amount: 60,
    image: elec4,
    brand: "Terracotta",
    typeProduct: "ឧបករណ៍អេឡិចត្រូនិច",
    advantages: [
      "ការទទួលស្នើជាបឋមពិសេស",
      "ការគាំទ្រប្រូតុងពេញនិងប្រសិទ្ធភាព",
      "ខ្លឹមសារសូលុយស្រឡំ",
      "អាចត្រួតពិនិត្យការដោះស្រាយនៅតំបន់ងាយស្រួល",
      "ការលក់ពិសេស",
    ],
  },
  {
    id: 33,
    model: "Type-c 8-in-1 Hub Multiport Adapter",
    dis_price: 49.99,
    price: 59.99,
    amount: 40,
    image: elec5,
    brand: "Type-c",
    typeProduct: "ឧបករណ៍អេឡិចត្រូនិច",
    advantages: [
      "ការទទួលស្នើជាបឋមពិសេស",
      "ការគាំទ្រប្រូតុងពេញនិងប្រសិទ្ធភាព",
      "ខ្លឹមសារសូលុយស្រឡំ",
      "អាចត្រួតពិនិត្យការដោះស្រាយនៅតំបន់ងាយស្រួល",
      "ការលក់ពិសេស",
    ],
  },
];
