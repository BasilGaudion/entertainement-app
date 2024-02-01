"use client";

import SearchBar from "../../../components/search-bar";
import TrendingHome from "./trending";
import data from "../../../data.json";
import EntertainementGrid from "../../../components/entertainement-grid";
import { useStoreSearch } from "../../store/searchStore";

const Home: React.FC = () => {
  const search = useStoreSearch((state) => state.search);
  const trendingData = data.filter((item) => item.isTrending === true);

  const forYouData = data.filter(
    (item) =>
      item.isTrending === false &&
      item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full ml-[164px] p-0">
      <SearchBar placeholder="Search for movies or TV series" />
      <TrendingHome data={trendingData} />
      <EntertainementGrid data={forYouData} title="Recommended for you" />
    </div>
  );
};

export default Home;
