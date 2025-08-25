'use client';

import React, { useState } from 'react';
import { MdxRecordList, MdxRightBar, SortOption } from '@/app/components/common';
import { Author } from '@/lib/mdx';

// Custom type with only the properties actually used by the components
interface PostRecord {
  slug: string;
  title: string;
  date: string;
  author: Author[];
  content: string;
}

interface MdxContentLayoutProps {
  children: React.ReactNode;
  records: PostRecord[];
  currentSlug: string;
  sectionTitle?: string;
}

const MdxContentLayout: React.FC<MdxContentLayoutProps> = ({
  children,
  records,
  currentSlug,
  sectionTitle = 'Content',
}) => {
  const [currentSort, setCurrentSort] = useState<SortOption>('date-desc');

  const handleSortChange = (sortOption: SortOption) => {
    setCurrentSort(sortOption);
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Sidebar */}
      <div className="sticky top-16 h-screen w-80 flex-shrink-0">
        <div className="h-full bg-black/95 border-r border-gray-800">
          <MdxRecordList
            records={records}
            currentSlug={currentSlug}
            onSortChange={handleSortChange}
            currentSort={currentSort}
            sectionTitle={sectionTitle}
            basePath={sectionTitle === 'Tutorials' ? '/tutorials' : '/blog'}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-black">{children}</div>

      {/* Right Sidebar */}
      <div className="sticky top-16 h-screen w-80 flex-shrink-0">
        <div className="h-full bg-black/95 border-l border-gray-800">
          <MdxRightBar records={records} currentSlug={currentSlug} />
        </div>
      </div>
    </div>
  );
};

export { MdxContentLayout };
