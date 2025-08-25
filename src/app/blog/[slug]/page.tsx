import React from 'react';
import { notFound } from 'next/navigation';
import { getBlogPostContentBySlug, getAllBlogPosts, MDXParser } from '@/lib/mdx';
import { MDXRenderer } from '@/lib/MDXRenderer';
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
  const post = getBlogPostContentBySlug(slug);

  if (!post) {
    notFound();
  }

  const allPosts = getAllBlogPosts();

  const mdxContent = MDXParser.reconstructMDX(post);

  return (
    <BlogLayout posts={allPosts} currentSlug={slug}>
      <div className="p-8">
        <MDXRenderer mdxContent={mdxContent} markdownContent={post} />
      </div>
    </BlogLayout>
  );
}
