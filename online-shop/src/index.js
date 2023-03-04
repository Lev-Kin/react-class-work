import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Shop } from "./pages/shop";
import { Product } from "./pages/product";
import { Login } from "./pages/login";
import { Cart } from "./pages/cart";
import { Contacts } from "./pages/contacts";
import { NotFound } from "./pages/notFound";
import { MainMenu } from "./components/mainMenu";
import {PrivateRoute} from './components/privateRoute';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<MainMenu />}>
          <Route element={<PrivateRoute/>}>
            <Route path="cart" element={<Cart />}  />
          </Route>
          <Route index element={<Shop />} />
          <Route path='contacts' element={<Contacts />} />
          <Route path="product/:productId" element={<Product />} />
          <Route path="product" element={<Navigate to="/" />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
