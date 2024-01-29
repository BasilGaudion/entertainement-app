"use client";

import React, { useEffect } from "react";
import SearchBar from "./search-bar";
import TrendingHome from "./trending";
import data from "../../../data.json";

const Home: React.FC = () => {
  const trendingData = data.filter((item) => item.isTrending === true);

  return (
    <div className="w-full ml-9">
      <SearchBar />
      <TrendingHome data={trendingData} />
    </div>
  );
};

export default Home;
