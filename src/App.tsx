import React from "react";
import Header from "./compoents/ui/Header/Header";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ProductsPage from "./pages/products/ProductsPage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import AllProducts from "./pages/products/AllProducts";
import AnaliticPage from "./pages/analitic/AnaliticPage";
import GroupOfProductsPage from "./pages/products/GroupOfProductsPage";
import ProductReceipt from "./pages/products/ProductReceipt";
import "./styles/styles.scss";
import Users from "./pages/users/Users";
import AllUsers from "./pages/users/AllUsers";
import Orders from "./pages/users/Orders";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/products" element={<ProductsPage />}>
          <Route index element={<AllProducts />} />
        </Route>
        <Route path={"/group_of_products"} element={<GroupOfProductsPage />} />
        <Route path={"/product_ingredient"} element={<ProductReceipt />} />
        <Route path="/analitic" element={<AnaliticPage />}></Route>
        <Route path="/auth/register" element={<RegisterPage />}></Route>
        <Route path="/auth/login" element={<LoginPage />}></Route>
        <Route path="/users" element={<Users />}>
          <Route index element={<AllUsers />} />
          <Route path="orders" element={<Orders />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
