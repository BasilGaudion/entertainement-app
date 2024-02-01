"use client";

import React, { useEffect } from "react";
import SearchBar from "../../../components/search-bar";
import data from "../../../data.json";
import EntertainementGrid from "../../../components/entertainement-grid";
import { useStoreSearch } from "../../store/searchStore";

const Home: React.FC = () => {
  const search = useStoreSearch((state) => state.search);
  const gridData = data.filter(
    (item) =>
      item.category === "Movie" &&
      item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full ml-[164px] p-0">
      <SearchBar placeholder="Search for movies" />
      <EntertainementGrid data={gridData} title="Movies" />
    </div>
  );
};

export default Home;
