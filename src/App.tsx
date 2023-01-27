import React from "react";
import Header from "./compoents/ui/Header/Header";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ProductsPage from "./pages/products/ProductsPage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import AllProducts from "./pages/products/AllProducts";
import DashboardPage from "./pages/dashboard/DashboardPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/products" element={<ProductsPage />}>
          <Route index element={<AllProducts />} />
        </Route>
        <Route path="/dashboard" element={<DashboardPage />}></Route>

        <Route path="/auth/register" element={<RegisterPage />}></Route>
        <Route path="/auth/login" element={<LoginPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
