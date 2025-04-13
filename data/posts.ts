export interface Post {
  id: number;
  imageUrl: string;
  category: string;
  title: string;
  description: string;
  author: string;
  avatarUrl: string;
  date: string;
  time: string;
  content: string;
}

export const posts: Post[] = [
  {
    id: 1,
    imageUrl: "https://picsum.photos/800/600?random=1",
    category: "Frontend Development",
    title: "Mastering React Components",
    description: "Learn how to create reusable and performant components.",
    avatarUrl: "https://i.pravatar.cc/150?img=1",
    author: "Jane Doe",
    date: "April 12, 2025",
    time: "2h ago",
    content:
      "In this post, we’ll explore best practices for building and maintaining React components.",
  },
  {
    id: 2,
    imageUrl: "https://picsum.photos/800/600?random=2",
    category: "Backend Development",
    title: "Node.js Middleware Explained",
    description: "Understanding how middleware works in Express.",
    avatarUrl: "https://i.pravatar.cc/150?img=2",
    author: "John Smith",
    date: "April 11, 2025",
    time: "5h ago",
    content:
      "Middleware functions are functions that have access to the request and response objects. Let's explore them.",
  },
  {
    id: 3,
    imageUrl: "https://picsum.photos/800/600?random=3",
    category: "Design",
    title: "UX Principles for Developers",
    description: "Design tips every developer should know.",
    avatarUrl: "https://i.pravatar.cc/150?img=3",
    author: "Emily Stone",
    date: "April 10, 2025",
    time: "1d ago",
    content:
      "A great user experience is not just about beauty—it's about function. Here's what developers need to consider.",
  },
  {
    id: 4,
    imageUrl: "https://picsum.photos/800/600?random=4",
    category: "DevOps",
    title: "CI/CD Pipelines with GitHub Actions",
    description: "Automate your workflow using GitHub Actions.",
    avatarUrl: "https://i.pravatar.cc/150?img=4",
    author: "Michael Ray",
    date: "April 9, 2025",
    time: "3d ago",
    content:
      "CI/CD automation is a must for modern dev teams. Learn how to set up pipelines using GitHub Actions.",
  },
  {
    id: 5,
    imageUrl: "https://picsum.photos/800/600?random=5",
    category: "Full Stack",
    title: "Building Full-Stack Apps with Next.js",
    description: "Server-side rendering and APIs in Next.js.",
    avatarUrl: "https://i.pravatar.cc/150?img=5",
    author: "Laura Kim",
    date: "April 8, 2025",
    time: "4d ago",
    content:
      "Next.js lets you build scalable full-stack apps. Here's how to use SSR and API routes effectively.",
  },
  {
    id: 6,
    imageUrl: "https://picsum.photos/800/600?random=6",
    category: "Frontend",
    title: "Tailwind CSS Tips & Tricks",
    description: "Speed up your UI development with these Tailwind tips.",
    avatarUrl: "https://i.pravatar.cc/150?img=6",
    author: "Chris Allen",
    date: "April 7, 2025",
    time: "5d ago",
    content:
      "Tailwind is a utility-first CSS framework. These tricks will help you write cleaner code.",
  },
  {
    id: 7,
    imageUrl: "https://picsum.photos/800/600?random=7",
    category: "JavaScript",
    title: "Async/Await Deep Dive",
    description: "Master asynchronous code in JavaScript.",
    avatarUrl: "https://i.pravatar.cc/150?img=7",
    author: "Sarah Lee",
    date: "April 6, 2025",
    time: "6d ago",
    content:
      "Asynchronous JavaScript is essential. Learn how async/await works behind the scenes.",
  },
  {
    id: 8,
    imageUrl: "https://picsum.photos/800/600?random=8",
    category: "Database",
    title: "Using Prisma with PostgreSQL",
    description: "Simplify your database interactions using Prisma.",
    avatarUrl: "https://i.pravatar.cc/150?img=8",
    author: "Daniel Cho",
    date: "April 5, 2025",
    time: "1w ago",
    content:
      "Prisma is a modern ORM that makes working with databases easier. Here's how to use it with PostgreSQL.",
  },
  {
    id: 9,
    imageUrl: "https://picsum.photos/800/600?random=9",
    category: "Mobile Development",
    title: "React Native Crash Course",
    description: "Build your first mobile app using React Native.",
    avatarUrl: "https://i.pravatar.cc/150?img=9",
    author: "Nina Hart",
    date: "April 4, 2025",
    time: "1w ago",
    content:
      "React Native allows you to build native apps using React. Let’s start from scratch.",
  },
  {
    id: 10,
    imageUrl: "https://picsum.photos/800/600?random=10",
    category: "Testing",
    title: "Intro to Unit Testing with Jest",
    description: "Learn how to write unit tests for JavaScript code.",
    avatarUrl: "https://i.pravatar.cc/150?img=10",
    author: "Tom Brooks",
    date: "April 3, 2025",
    time: "1w ago",
    content:
      "Testing is critical for reliable code. Here's how to get started with Jest.",
  },
  {
    id: 11,
    imageUrl: "https://picsum.photos/800/600?random=11",
    category: "Career",
    title: "Landing Your First Dev Job",
    description: "Tips and tricks for junior developers entering tech.",
    avatarUrl: "https://i.pravatar.cc/150?img=11",
    author: "Anna Grey",
    date: "April 2, 2025",
    time: "2w ago",
    content:
      "Job hunting as a junior dev can be tough—here are some practical strategies to stand out.",
  },
  {
    id: 12,
    imageUrl: "https://picsum.photos/800/600?random=12",
    category: "Productivity",
    title: "Developer Tools You Should Know",
    description: "The best tools to boost your dev productivity.",
    avatarUrl: "https://i.pravatar.cc/150?img=12",
    author: "Leo Marks",
    date: "April 1, 2025",
    time: "2w ago",
    content:
      "From code editors to browser extensions—these are the tools every dev should use.",
  },
  {
    id: 13,
    imageUrl: "https://picsum.photos/800/600?random=13",
    category: "Open Source",
    title: "Contributing to Open Source",
    description: "A beginner’s guide to getting started with OSS.",
    avatarUrl: "https://i.pravatar.cc/150?img=13",
    author: "Julia Wills",
    date: "March 31, 2025",
    time: "2w ago",
    content:
      "Open source can be intimidating, but it's very rewarding. Here's how to contribute.",
  },
  {
    id: 14,
    imageUrl: "https://picsum.photos/800/600?random=14",
    category: "Security",
    title: "Web App Security Basics",
    description: "How to keep your web apps secure.",
    avatarUrl: "https://i.pravatar.cc/150?img=14",
    author: "Rick James",
    date: "March 30, 2025",
    time: "2w ago",
    content:
      "Security should never be an afterthought. Learn basic practices for building secure apps.",
  },
  {
    id: 15,
    imageUrl: "https://picsum.photos/800/600?random=15",
    category: "APIs",
    title: "REST vs GraphQL",
    description: "Choosing the right API architecture.",
    avatarUrl: "https://i.pravatar.cc/150?img=15",
    author: "Monica Rose",
    date: "March 29, 2025",
    time: "3w ago",
    content:
      "Both REST and GraphQL have strengths. Let's break down their pros and cons.",
  },
  {
    id: 16,
    imageUrl: "https://picsum.photos/800/600?random=16",
    category: "Version Control",
    title: "Advanced Git Commands",
    description: "Level up your Git workflow.",
    avatarUrl: "https://i.pravatar.cc/150?img=16",
    author: "Eli Turner",
    date: "March 28, 2025",
    time: "3w ago",
    content: "Master Git with these advanced commands and techniques.",
  },
  {
    id: 17,
    imageUrl: "https://picsum.photos/800/600?random=17",
    category: "Cloud",
    title: "Deploying to Vercel",
    description: "How to deploy your Next.js app with ease.",
    avatarUrl: "https://i.pravatar.cc/150?img=17",
    author: "Kim Nguyen",
    date: "March 27, 2025",
    time: "3w ago",
    content:
      "Vercel makes deployment a breeze. Here’s how to push your Next.js app live.",
  },
  {
    id: 18,
    imageUrl: "https://picsum.photos/800/600?random=18",
    category: "TypeScript",
    title: "Getting Started with TypeScript",
    description: "Why and how to use TypeScript in your projects.",
    avatarUrl: "https://i.pravatar.cc/150?img=18",
    author: "Oliver Hall",
    date: "March 26, 2025",
    time: "3w ago",
    content:
      "TypeScript offers safety and clarity. Learn the basics and why it's worth using.",
  },
  {
    id: 19,
    imageUrl: "https://picsum.photos/800/600?random=19",
    category: "AI/ML",
    title: "Intro to Machine Learning",
    description: "Get started with ML as a developer.",
    avatarUrl: "https://i.pravatar.cc/150?img=19",
    author: "Sophia Kim",
    date: "March 25, 2025",
    time: "4w ago",
    content:
      "Machine Learning is no longer just for data scientists. Here's how developers can begin.",
  },
  {
    id: 20,
    imageUrl: "https://picsum.photos/800/600?random=20",
    category: "CSS",
    title: "CSS Grid vs Flexbox",
    description: "Which layout system should you use?",
    avatarUrl: "https://i.pravatar.cc/150?img=20",
    author: "Ben Carter",
    date: "March 24, 2025",
    time: "4w ago",
    content:
      "Both Grid and Flexbox are powerful. This guide helps you decide when to use which.",
  },
];
