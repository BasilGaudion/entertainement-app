import Image from "next/image";
import SearchIcon from "../public/assets/icon-search.svg";
import { Input } from "@/components/ui/input";
import { useStoreSearch } from "../app/store/searchStore";

interface SearchBarProps {
  placeholder: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const setSearch = useStoreSearch((state) => state.setSearch);
  return (
    <div className="mt-14 pr-9 flex items-center max-w-screen-md">
      <Image src={SearchIcon} alt="search" width={32} height={32} />
      <Input type="text" placeholder={placeholder} onChange={handleChange} />
    </div>
  );
};

export default SearchBar;
