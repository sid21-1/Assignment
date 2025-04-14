// app/post/[id]/page.tsx
import { posts } from "@/data/posts";
import Image from "next/image";

export default function PostPage({ params }: { params: { id: string } }) {
  const post = posts.find((p) => p.id === parseInt(params.id));

  if (!post) {
    return (
      <div className="text-center text-red-500 mt-10">Post not found.</div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-500 text-sm mb-2">{post.date}</p>
      <img
        src={post.imageUrl}
        alt={post.title}
        className="rounded-lg mb-6 w-full object-cover h-[400px]"
      />
      <div className="flex items-center gap-2 font-semibold mb-8">
        <Image
          src={post.avatarUrl}
          alt={post.author}
          width={40}
          height={40}
          className="rounded-full object-cover"
        />
        <p>{post.author}</p>
      </div>
      <p className="text-lg text-gray-700 mb-6">{post.content}</p>
    </div>
  );
}
