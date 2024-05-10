import React from "react";
import SearchBar from "./SearchBar";
import CountriesList from "./CountriesList";
import SelectMenu from "./SelectMenu";
import { useState } from "react";
import "../App.css";

const Home = () => {
  const [query, setQuery] = useState("");
  return (
    <main>
      <div className="search-filter-container">
        <SearchBar setQuery={setQuery} />
        <SelectMenu />
      </div>
      {query === "unmount" ? "" : <CountriesList query={query} />}
    </main>
  );
};

export default Home;
