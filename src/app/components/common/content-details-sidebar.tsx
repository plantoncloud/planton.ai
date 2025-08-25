'use client';

import React, { useEffect, useState } from 'react';
import AuthorSection from '@/app/components/blog/AuthorSection';
import TableOfContents from '@/app/components/blog/TableOfContents';
import { Author } from '@/lib/mdx';

// Custom type with only the properties actually used by the component
interface PostRecord {
  slug: string;
  title: string;
  date: string;
  author: Author[];
  content: string;
}

interface IMdxRightBar {
  records: PostRecord[];
  currentSlug?: string;
}

interface HeadingItem {
  id: string;
  text: string;
  level: number;
}

const MdxRightBar: React.FC<IMdxRightBar> = ({ records, currentSlug }) => {
  const [headings, setHeadings] = useState<HeadingItem[]>([]);
  const [currentRecord, setCurrentRecord] = useState<PostRecord | null>(null);

  // Get current post data
  useEffect(() => {
    if (currentSlug) {
      const record = records.find((p) => p.slug === currentSlug);
      setCurrentRecord(record || null);
    }
  }, [currentSlug, records]);

  // Extract headings from the current post content
  useEffect(() => {
    if (currentRecord?.content) {
      const headingRegex = /^(#{1,6})\s+(.+)$/gm;
      const extractedHeadings: HeadingItem[] = [];
      let match;

      while ((match = headingRegex.exec(currentRecord.content)) !== null) {
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
  }, [currentRecord]);

  if (!currentRecord) {
    return <></>;
  }

  return (
    <div className="w-80 bg-black/95  h-full flex flex-col">
      {/* Author Section */}
      <AuthorSection author={currentRecord?.author} />
      <div className="border-b border-gray-800" />
      {/* Table of Contents */}
      <TableOfContents headings={headings} />
    </div>
  );
};

export { MdxRightBar };
