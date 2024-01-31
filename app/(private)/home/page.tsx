"use client";

import React, { useEffect } from "react";
import SearchBar from "../../../components/search-bar";
import TrendingHome from "./trending";
import data from "../../../data.json";
import ForYou from "./for-you";

const Home: React.FC = () => {
  const trendingData = data.filter((item) => item.isTrending === true);
  const forYouData = data.filter((item) => item.isTrending === false);

  return (
    <div className="w-full ml-[164px] p-0 overflow-auto">
      <SearchBar placeholder="Search for movies or TV series" />
      {/* <TrendingHome data={trendingData} /> */}
      <ForYou data={forYouData} />
    </div>
  );
};

export default Home;
