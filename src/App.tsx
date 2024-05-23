import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Navber from "./components/Navber";

function App() {
  return (
    <>
      <Header />
      <Navber />
      <Outlet />
    </>
  );
}

export default App;
