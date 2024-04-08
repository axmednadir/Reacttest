import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Views/Home'
import About from './Views/About'
import Layout from './Views/Layout'
import Contact from "./Views/Contact";


function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
