
// routes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Remove the following line if you don't have an About component */}
      {/* <Route path="/about" element={<About />} /> */}
    </Routes>
  );
};

export default MyRoutes;
