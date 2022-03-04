import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Main from './pages/Main/Main';
import GoodsList from './pages/GoodsList/GoodsList';
import GoodsView from './pages/GoodsView/GoodsView';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/goodslist" element={<GoodsList />} />
        <Route path="/goodsview" element={<GoodsView />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
