import React from 'react';
import { notFound } from 'next/navigation';
import { getBlogPostBySlug, getAllBlogPosts, reconstructMDXContent } from '@/lib/mdx';
import MDXRenderer from '@/app/components/blog/MDXRenderer';

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

  // Reconstruct the MDX content with frontmatter using the utility function
  const mdxContent = reconstructMDXContent(post);

  return (
    <div className="min-h-screen">
      <MDXRenderer mdxContent={mdxContent} />
    </div>
  );
} 