import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import Category from "./pages/Category";
import Header from "./Components/Navbar";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/Category/:type" element={<Category />} />
      </Routes>
    </>
  );
};

export default App;
