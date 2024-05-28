import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Navber from "./components/Navber";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Navber />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
