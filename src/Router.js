import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Main from './pages/Main/Main';
import Login from './components/Login/Login';
import GoodsList from './pages/GoodsList/GoodsList';
import Footer from './components/Footer/Footer';

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<GoodsList />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default Router;
