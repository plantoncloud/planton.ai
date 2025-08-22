'use client';

import React from 'react';

interface HeadingItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  headings: HeadingItem[];
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ headings }) => {
  if (headings.length === 0) {
    return null;
  }

  // Handle smooth scrolling for navigation links
  const handleNavigationClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    
    // Update the URL hash
    window.history.pushState(null, '', `#${targetId}`);
    
    // Smooth scroll to the target element
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div className="flex-1 overflow-y-auto p-4">
      <h3 className="text-lg font-semibold text-white mb-4">
        On this page
      </h3>
      <nav className="space-y-2">
        {headings.map((heading) => (
          <a
            key={heading.id}
            href={`#${heading.id}`}
            onClick={(e) => handleNavigationClick(e, heading.id)}
            className={`block text-sm text-gray-400 hover:text-white transition-colors cursor-pointer ${
              heading.level === 1 ? 'font-semibold' : 
              heading.level === 2 ? 'ml-0' : 
              heading.level === 3 ? 'ml-4' : 'ml-6'
            }`}
          >
            {heading.text}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default TableOfContents; 