import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "../src/pages/signUp/SignUp";
import Login from "../src/pages/login/Login";
import Shop from "./pages/shop/Shop";
import NavBar from "./components/navBar/NavBar";
import ShopCategory from "./pages/shopCategory/ShopCategory";
import Product from "./pages/product/Product";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/men" element={<ShopCategory category="men" />} />
        <Route path="/women" element={<ShopCategory category="women" />} />
        <Route path="/kids" element={<ShopCategory category="kids" />} />
        <Route path="/product" element={<Product />} />
        <Route path="/:productId" element={<Product />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
