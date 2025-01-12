import React, { useContext } from "react";
import SearchBar from "./SearchBar";
import CountriesList from "./CountriesList";
import SelectMenu from "./SelectMenu";
import { useState } from "react";
import "../App.css";
import { useParams } from "react-router-dom";

const Home = ({ theme }) => {
  const [query, setQuery] = useState("");

  const [isDark] = theme;
  console.log(theme);
  return (
    <main className={`${isDark ? "dark" : ""}`}>
      <div className="search-filter-container">
        <SearchBar setQuery={setQuery} />
        <SelectMenu />
      </div>
      {query === "unmount" ? "" : <CountriesList query={query} />}
    </main>
  );
};

export default Home;
