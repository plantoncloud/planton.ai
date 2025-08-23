'use client';

import React from 'react';
import { Author } from '@/lib/mdx';
import AuthorSection from '@/app/components/blog/AuthorSection';

interface RightSidebarProps {
  author: Author[];
}

const RightSidebar: React.FC<RightSidebarProps> = ({ author = [] }) => {
  return (
    <div className="w-80 bg-black/95 h-full flex flex-col">
      <AuthorSection author={author} />
    </div>
  );
};

export default RightSidebar;