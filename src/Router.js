import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import GoodsList from './pages/Goods_list/GoodsList';
import GoodsView from './pages/Goods_view/GoodsView';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/goodslist" element={<GoodsList />} />
        <Route path="/goodsview" element={<GoodsView />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
