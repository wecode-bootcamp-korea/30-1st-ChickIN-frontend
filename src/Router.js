import React from 'react';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import Main from './pages/Main/Main';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';
import GoodsView from './pages/Goods_view/GoodsView';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/goodsView" element={<GoodsView />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
