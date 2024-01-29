"use client";

import React, { useEffect } from "react";
import SearchBar from "./search-bar";
import TrendingHome from "./trending";
import data from "../../../data.json";
import ForYou from "./for-you";

const Home: React.FC = () => {
  const trendingData = data.filter((item) => item.isTrending === true);
  const forYouData = data.filter((item) => item.isTrending === false);

  return (
    <div className="w-full ml-[164px]">
      <SearchBar />
      <TrendingHome data={trendingData} />
      <ForYou data={forYouData} />
    </div>
  );
};

export default Home;
