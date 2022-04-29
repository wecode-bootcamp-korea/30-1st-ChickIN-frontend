import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Main from './pages/Main/Main';
import GoodsList from './pages/GoodsList/GoodsList';
import GoodsView from './pages/GoodsView/GoodsView';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';
import SignUp from './components/Signup/Signup';
import Cart from './pages/Cart/Cart';

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/products" element={<GoodsList />} />
        <Route path="/products/:goodsId" element={<GoodsView />} />
        <Route path="/cartview" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
