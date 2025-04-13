import React from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar = ({ searchTerm, setSearchTerm }: SearchBarProps) => {
  return (
    <div className="w-[343px] h-[48px] flex flex-row items-center gap-2 px-4 py-3 bg-white border border-[#D0D5DD] rounded-lg shadow-[0px_1px_2px_rgba(16,24,40,0.05)]">
      <Search size={20} className="text-[#667085] flex-shrink-0" />
      <Input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search"
        className="border-none shadow-none text-[16px] leading-6 text-[#667085] placeholder-[#667085] font-inter focus-visible:ring-0 focus-visible:ring-offset-0 p-0 h-6"
      />
    </div>
  );
};

export default SearchBar;
