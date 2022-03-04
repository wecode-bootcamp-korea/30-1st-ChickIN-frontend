import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
<<<<<<< HEAD
import Main from './pages/Main/Main';
import Login from './components/Login/Login';
=======
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Main from './pages/Main';
import GoodsList from './pages/Goods_list/GoodsList';
import GoodsView from './pages/Goods_view/GoodsView';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
>>>>>>> master

function Router() {
  return (
    <BrowserRouter>
<<<<<<< HEAD
      {/* <Nav /> */}
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {/* <Footer /> */}
=======
      <Nav />
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/goodslist" element={<GoodsList />} />
        <Route path="/goodsview" element={<GoodsView />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
>>>>>>> master
    </BrowserRouter>
  );
}
export default Router;
