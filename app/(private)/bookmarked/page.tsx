"use client";

import React, { useEffect } from "react";
import SearchBar from "../../../components/search-bar";
import data from "../../../data.json";
import EntertainementGrid from "../../../components/entertainement-grid";

const Home: React.FC = () => {
  const bookmarkedMovies = data.filter(
    (item) => item.category === "Movies" && item.isBookmarked
  );
  const bookmarkeedTvSeries = data.filter(
    (item) => item.category === "TV Series" && item.isBookmarked
  );

  return (
    <div className="w-full ml-[164px] p-0">
      <SearchBar placeholder="Search for TV Series" />
      <EntertainementGrid data={bookmarkedMovies} title="Bookmarked Movies" />
      <EntertainementGrid
        data={bookmarkeedTvSeries}
        title="Bookmarked TV Series"
      />
    </div>
  );
};

export default Home;
