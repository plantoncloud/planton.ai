import React from 'react';
import { notFound } from 'next/navigation';
import { getBlogPostBySlug, getAllBlogPosts, reconstructMDXContent } from '@/lib/mdx';
import MDXRenderer from '@/app/components/blog/MDXRenderer';
import BlogLayout from '@/app/components/blog/BlogLayout';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  
  if (!post) {
    notFound();
  }

  // Get all posts for the sidebar
  const allPosts = getAllBlogPosts();

  // Reconstruct the MDX content with frontmatter using the utility function
  const mdxContent = reconstructMDXContent(post);

  return (
    <BlogLayout posts={allPosts} currentSlug={slug}>
      <div className="p-8">
        <MDXRenderer mdxContent={mdxContent} />
      </div>
    </BlogLayout>
  );
} 