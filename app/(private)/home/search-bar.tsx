import Image from "next/image";
import SearchIcon from "../../../public/assets/icon-search.svg";
import { Input } from "@/components/ui/input";

const SearchBar = () => {
  return (
    <div className="mt-14 pr-9 flex items-center max-w-screen-md">
      <Image src={SearchIcon} alt="search" width={32} height={32} />
      <Input type="text" placeholder="Search for movies or TV series" />
    </div>
  );
};

export default SearchBar;
