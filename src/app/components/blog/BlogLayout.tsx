'use client';

import React, { useState } from 'react';
import { BlogPost } from '@/lib/mdx';
import BlogSidebar from '@/app/components/blog/BlogSidebar';
import RightSidebar from '@/app/components/blog/RightSidebar';

interface BlogLayoutProps {
  children: React.ReactNode;
  posts: BlogPost[];
  currentSlug?: string;
}

type SortOption = 'date-desc' | 'date-asc' | 'title-asc' | 'title-desc';

const BlogLayout: React.FC<BlogLayoutProps> = ({ children, posts, currentSlug }) => {
  const [currentSort, setCurrentSort] = useState<SortOption>('date-desc');

  const handleSortChange = (sortOption: SortOption) => {
    setCurrentSort(sortOption);
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Sidebar */}
      <div className="sticky top-16 h-screen w-80 flex-shrink-0">
        <div className="h-full bg-black/95 border-r border-gray-800">
          <BlogSidebar 
            posts={posts} 
            currentSlug={currentSlug}
            onSortChange={handleSortChange}
            currentSort={currentSort}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-black">
        {children}
      </div>

      {/* Right Sidebar */}
      <div className="sticky top-16 h-screen w-80 flex-shrink-0">
        <div className="h-full bg-black/95 border-l border-gray-800">
          <RightSidebar posts={posts} currentSlug={currentSlug} />
        </div>
      </div>
    </div>
  );
};

export default BlogLayout; 