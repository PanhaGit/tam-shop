import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/pages/Navber/Home";
import BrandProduct from "../components/pages/Navber/BrandProduct";
import Shop from "../components/pages/Navber/Shop";
import Detail from "../components/detail/Detail";
import Contact from "../components/pages/Navber/Contact";
import AddToCart from "../components/addToCart/AddToCart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/shop", element: <Shop /> },
      { path: "/brand_product", element: <BrandProduct /> },
      { path: "/contact_us", element: <Contact /> },
      { path: "/detail/:id", element: <Detail /> },
      { path: "/add_to_cart", element: <AddToCart /> },
    ],
  },
]);

export default router;
