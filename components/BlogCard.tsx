import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
type BlogCardProps = {
  id: number;
  imageUrl: string;
  category: string;
  title: string;
  description: string;
  author: string;
  date: string;
  avatarUrl: string;
};

const BlogCard = ({
  id,
  imageUrl,
  category,
  title,
  description,
  author,
  date,
  avatarUrl,
}: BlogCardProps) => {
  return (
    <div className="flex flex-col p-6 gap-8 w-[384px] h-[480px] bg-white shadow-[0_0_20px_-4px_rgba(16,24,40,0.05),0_0_20px_-2px_rgba(16,24,40,0.03)] ">
      <div className="relative w-full h-[240px] rounded-md overflow-hidden">
        <Link href={`/post/${id}`} className="no-underline">
          <Image
            src={imageUrl}
            alt="Blog preview"
            fill
            className="object-cover"
          />
        </Link>
      </div>

      <div className="flex flex-col justify-between gap-8 h-full">
        <div className="flex flex-col gap-3">
          <p className="text-sm font-semibold text-[#6941C6]">{category}</p>
          <div className="flex items-start justify-between">
            <h2 className="text-xl font-semibold text-[#101828]">{title}</h2>
            <Link href={`/post/${id}`} className="no-underline">
              <ArrowUpRight size={24} className="text-[#101828]" />
            </Link>
          </div>
          <p className="text-sm text-[#667085]">{description}</p>
        </div>

        <div className="flex items-center gap-3">
          <Image
            src={avatarUrl}
            alt={author}
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-medium text-[#101828]">{author}</p>
            <p className="text-sm text-[#667085]">{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
