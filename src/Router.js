import React from 'react';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import Main from './pages/Main/Main';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';
import GoodsView from './pages/Goods_view/GoodsView';

function Router() {
  return (
    <BrowserRouter>
      <Routes></Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
