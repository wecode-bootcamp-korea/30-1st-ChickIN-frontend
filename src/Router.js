import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Main from './pages/Main/Main';
import GoodsList from './pages/Goods_list/GoodsList';
import GoodsView from './pages/Goods_view/GoodsView';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/products" element={<GoodsList />} />
        <Route path="/goodsview/:goodsId" element={<GoodsView />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default Router;
