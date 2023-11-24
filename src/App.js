import "./Assets/Images/Styles/Style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import AboutUs from "./Pages/AboutUs";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
