import React from "react";
import BlogCard from "./BlogCard";
import { posts } from "../data/posts";

interface BlogListProps {
  searchTerm: string;
}

const BlogList = ({ searchTerm }: BlogListProps) => {
  const filteredPosts = posts.filter((post) =>
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto flex flex-wrap justify-center gap-6 py-8">
      {filteredPosts.length === 0 ? (
        <div className="text-center text-lg text-gray-500">
          No results found
        </div>
      ) : (
        filteredPosts.map((post) => (
          <BlogCard
            id={post.id}
            key={post.id}
            imageUrl={post.imageUrl}
            category={post.category}
            title={post.title}
            description={post.description}
            author={post.author}
            date={post.date}
            avatarUrl={post.avatarUrl}
          />
        ))
      )}
    </div>
  );
};

export default BlogList;
