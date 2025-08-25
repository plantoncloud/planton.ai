'use client';

import React, { useEffect, useState } from 'react';
import { Author } from '@/lib/mdx';
import AuthorSection from '@/app/components/blog/AuthorSection';
import TableOfContents from '@/app/components/blog/TableOfContents';

interface RightSidebarProps {
  author: Author[];
  content?: string;
}

interface HeadingItem {
  id: string;
  text: string;
  level: number;
}

const RightSidebar: React.FC<RightSidebarProps> = ({ author = [], content }) => {
  const [headings, setHeadings] = useState<HeadingItem[]>([]);

  // Extract headings from the content
  useEffect(() => {
    if (content) {
      const headingRegex = /^(#{1,6})\s+(.+)$/gm;
      const extractedHeadings: HeadingItem[] = [];
      let match;

      while ((match = headingRegex.exec(content)) !== null) {
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
  }, [content]);

  return (
    <div className="w-80 bg-black/95 h-full flex flex-col">
      {/* Author Section - Only show if authors are present */}
      {author.length > 0 && (
        <>
          <AuthorSection author={author} />
          <div className="border-b border-gray-800" />
        </>
      )}
      {/* Table of Contents */}
      <TableOfContents headings={headings} />
    </div>
  );
};

export default RightSidebar;