import React, { useState } from "react";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CountryDetail from "./components/CountryDetail";

const App = () => {
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("isDarkMode"))
  );
  return (
    <>
      <Header theme={[isDark, setIsDark]} />
      <Routes>
        <Route path="/" element={<Home theme={[isDark]} />} />
        <Route path="/:country" element={<CountryDetail theme={[isDark]} />} />
      </Routes>
    </>
  );
};

export default App;
