import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Login from './components/Login/Login';

function Router() {
  return (
    <BrowserRouter>
      {/* <Nav /> */}
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}
export default Router;
