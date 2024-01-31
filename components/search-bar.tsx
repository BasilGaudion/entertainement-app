import Image from "next/image";
import SearchIcon from "../public/assets/icon-search.svg";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  placeholder: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder }) => {
  return (
    <div className="mt-14 pr-9 flex items-center max-w-screen-md">
      <Image src={SearchIcon} alt="search" width={32} height={32} />
      <Input type="text" placeholder={placeholder} />
    </div>
  );
};

export default SearchBar;
