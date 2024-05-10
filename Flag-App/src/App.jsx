import React from "react";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CountryDetail from "./components/CountryDetail";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:country" element={<CountryDetail />} />
      </Routes>
    </>
  );
};

export default App;
