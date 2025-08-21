import React from 'react';
import { getAllBlogPosts } from '@/lib/mdx';
import BlogPostCard from '@/app/components/blog/BlogPostCard';

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Blog
          </h1>
          <p className="text-xl text-gray-300">
            Latest insights, updates, and stories from our team
          </p>
        </header>

        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-400">No blog posts found.</p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogPostCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 