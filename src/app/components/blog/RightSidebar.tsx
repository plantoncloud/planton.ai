'use client';

import React, { useEffect, useState } from 'react';
import { BlogPost } from '@/lib/mdx';
import AuthorSection from '@/app/components/blog/AuthorSection';
import TableOfContents from '@/app/components/blog/TableOfContents';

interface RightSidebarProps {
  posts: BlogPost[];
  currentSlug?: string;
}

interface HeadingItem {
  id: string;
  text: string;
  level: number;
}

const RightSidebar: React.FC<RightSidebarProps> = ({ posts, currentSlug }) => {
  const [headings, setHeadings] = useState<HeadingItem[]>([]);
  const [currentPost, setCurrentPost] = useState<BlogPost | null>(null);

  // Get current post data
  useEffect(() => {
    if (currentSlug) {
      const post = posts.find(p => p.slug === currentSlug);
      setCurrentPost(post || null);
    }
  }, [currentSlug, posts]);

  // Extract headings from the current post content
  useEffect(() => {
    if (currentPost?.content) {
      const headingRegex = /^(#{1,6})\s+(.+)$/gm;
      const extractedHeadings: HeadingItem[] = [];
      let match;

      while ((match = headingRegex.exec(currentPost.content)) !== null) {
        const level = match[1].length;
        const text = match[2].trim();
        const id = text
          .toLowerCase()
          .replace(/[^a-z0-9\s-]/g, '')
          .replace(/\s+/g, '-');

        extractedHeadings.push({ id, text, level });
      }

      setHeadings(extractedHeadings);
    }
  }, [currentPost]);

  if (!currentPost) {
    return (
      <div className="w-80 bg-black/95 h-full flex flex-col">
        <div className="p-4 flex-shrink-0">
          <p className="text-gray-400">Select a blog post to view details</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-80 bg-black/95  h-full flex flex-col">
      {/* Author Section */}
      <AuthorSection author={currentPost.author} />
      <div className="border-b border-gray-800" />
      {/* Table of Contents */}
      <TableOfContents headings={headings} />
    </div>
  );
};

export default RightSidebar; 