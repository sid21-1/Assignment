"use client";
import { Badge } from "@/components/ui/badge";
import SearchBar from "./SearchBar";

interface PageHeaderProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

export default function PageHeader({
  searchTerm,
  setSearchTerm,
}: PageHeaderProps) {
  return (
    <>
      <header className="container flex flex-col items-center justify-center mt-[96px] mb-[60px] md:mb-[96px]">
        <Badge
          variant="outline"
          className="flex items-center justify-center flex-row px-3 py-1 w-[82px] h-[28px] bg-[#F9F5FF] rounded-[16px] text-[#6941C6]"
        >
          Our Blog
        </Badge>

        <h1 className="text-[#42307D] font-inter font-semibold text-[36px] md:text-[48px] leading-[44px] md:leading-[60px] tracking-[-0.02em] text-center">
          Resources and insights
        </h1>
        <p className="text-[#6941C6] font-inter font-normal text-[18px] leading-[28px] md:text-[20px] md:leading-[30px] tracking-[0em] text-center mt-[20px] mb-[40px]">
          The latest industry news, interviews, technologies, and resources.
        </p>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </header>
    </>
  );
}
